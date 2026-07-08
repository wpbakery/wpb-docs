#!/usr/bin/env node

/**
 * Automated Algolia Indexing Script for Docusaurus
 * This script parses markdown files and indexes them to Algolia
 * Can be run locally or in CI/CD pipeline
 */

// Load environment variables from .env.local file if it exists
require('dotenv').config({ path: '.env.local' });

const { algoliasearch } = require('algoliasearch');
const fs = require('fs').promises;
const path = require('path');
const matter = require('gray-matter');
const { glob } = require('glob');

// Configuration - NEVER hardcode the admin key!
const CONFIG = {
  appId: process.env.ALGOLIA_APP_ID || 'I4BZ3VIOZE',
  adminKey: process.env.ALGOLIA_ADMIN_KEY, // MUST be set via environment variable
  indexName: process.env.ALGOLIA_INDEX_NAME || 'wp_kb',
  baseUrl: process.env.SITE_URL || 'https://kb-new.wpbakery.com',
  // One entry per Docusaurus docs plugin instance (see docusaurus.config.js)
  sections: [
    {
      dir: path.join(__dirname, '..', 'docs'),
      routeBasePath: 'docs',
      docusaurus_tag: 'docs-default-current'
    },
    {
      dir: path.join(__dirname, '..', 'devs'),
      routeBasePath: 'devs',
      docusaurus_tag: 'docs-devs-current'
    }
  ]
};

// Security check - prevent accidental exposure
if (!CONFIG.adminKey) {
  console.error('❌ ALGOLIA_ADMIN_KEY environment variable is required!');
  console.error('   Set it by running: export ALGOLIA_ADMIN_KEY="your-admin-key"');
  console.error('   Or create a .env.local file (DO NOT commit this file!)');
  process.exit(1);
}

// Initialize Algolia client
const client = algoliasearch(CONFIG.appId, CONFIG.adminKey);

/**
 * Parse a markdown file and extract content
 */
async function parseMarkdownFile(filePath, section) {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    const { data: frontmatter, content: markdownContent } = matter(content);

    // Skip files with hide_table_of_contents: true or draft: true
    if (frontmatter.draft || frontmatter.hide_from_search) {
      return null;
    }

    // Get relative path from the section's docs directory
    const relativePath = path.relative(section.dir, filePath);
    const urlPath = relativePath
      .replace(/\\/g, '/') // Windows path fix
      .replace(/\.md$/, '')  // Remove .md extension
      .replace(/\/index$/, ''); // Remove index from path

    // Extract headings
    const headings = [];
    const h1Match = markdownContent.match(/^#\s+(.+)$/m);
    const h2Matches = markdownContent.match(/^##\s+(.+)$/gm) || [];

    if (h1Match) {
      headings.push({ level: 1, text: h1Match[1] });
    }

    h2Matches.forEach(match => {
      headings.push({ level: 2, text: match.replace(/^##\s+/, '') });
    });

    // Clean content for indexing
    const cleanContent = markdownContent
      .replace(/```[\s\S]*?```/g, '') // Remove code blocks
      .replace(/`[^`]*`/g, '') // Remove inline code
      .replace(/#+\s/g, '') // Remove heading markers
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Convert links to text
      .replace(/!\[([^\]]*)\]\([^)]+\)/g, '') // Remove images
      .replace(/^\s*[-*]\s+/gm, '') // Remove list markers
      .replace(/\n{3,}/g, '\n\n') // Reduce multiple newlines
      .trim();

    // Format to match Docusaurus DocSearch expectations
    return {
      objectID: `${section.routeBasePath}-${urlPath || 'index'}`,
      url: `${CONFIG.baseUrl}/${section.routeBasePath}/${urlPath}`,
      // Hierarchy for breadcrumbs - MUST have these exact field names
      hierarchy: {
        lvl0: 'Documentation',
        lvl1: frontmatter.sidebar_label || frontmatter.title || h1Match?.[1] || '',
        lvl2: h2Matches[0]?.replace(/^##\s+/, '') || null,
        lvl3: null,
        lvl4: null,
        lvl5: null,
        lvl6: null
      },
      hierarchy_camel: {
        lvl0: 'Documentation',
        lvl1: frontmatter.sidebar_label || frontmatter.title || h1Match?.[1] || '',
        lvl2: h2Matches[0]?.replace(/^##\s+/, '') || null
      },
      // Main content
      content: cleanContent.substring(0, 5000),
      // Type must be 'lvl0', 'lvl1', 'lvl2', etc or 'content' for DocSearch
      type: 'content',
      // Additional fields for better search
      title: frontmatter.title || h1Match?.[1] || 'Untitled',
      // DocSearch expects these exact fields
      anchor: null,
      url_without_anchor: `${CONFIG.baseUrl}/${section.routeBasePath}/${urlPath}`,
      // Meta information
      docusaurus_tag: section.docusaurus_tag,
      lang: 'en',
      version: 'current'
    };
  } catch (error) {
    console.error(`Error parsing ${filePath}:`, error);
    return null;
  }
}

/**
 * Get all markdown files from a directory
 */
async function getAllMarkdownFiles(dir) {
  try {
    const pattern = path.join(dir, '**/*.md');
    const files = await glob(pattern);
    return files;
  } catch (error) {
    console.error('Error finding markdown files:', error);
    return [];
  }
}

/**
 * Main indexing function
 */
async function indexDocumentation() {
  console.log('🚀 Starting Algolia indexing...');

  try {
    // Parse all files across every docs section (docs/, devs/, ...)
    const records = [];
    for (const section of CONFIG.sections) {
      console.log(`📁 Scanning ${section.routeBasePath} directory: ${section.dir}`);
      const files = await getAllMarkdownFiles(section.dir);
      console.log(`📄 Found ${files.length} markdown files`);

      for (const file of files) {
        const record = await parseMarkdownFile(file, section);
        if (record) {
          records.push(record);
          console.log(`  ✓ Parsed: ${record.title}`);
        }
      }
    }

    console.log(`\n📦 Indexing ${records.length} records to Algolia...`);

    // Clear the existing index using the new API
    console.log('  Clearing existing index...');
    await client.clearObjects({
      indexName: CONFIG.indexName
    });
    console.log('  ✓ Cleared existing index');

    // Add new records using the new API
    if (records.length > 0) {
      const result = await client.saveObjects({
        indexName: CONFIG.indexName,
        objects: records
      });
      console.log(`  ✓ Indexed ${records.length} records`);
    }

    // Configure index settings for better search using the new API
    await client.setSettings({
      indexName: CONFIG.indexName,
      indexSettings: {
        searchableAttributes: [
          'unordered(title)',
          'unordered(headings.text)',
          'unordered(content)',
          'unordered(excerpt)',
          'slug'
        ],
        attributesToHighlight: [
          'title',
          'content',
          'headings.text'
        ],
        attributesToSnippet: [
          'content:50',
          'excerpt:20'
        ],
        attributesForFaceting: [
          'type',
          'category',
          'hierarchy.lvl0',
          'hierarchy.lvl1'
        ],
        customRanking: [
          'asc(position)',
          'desc(lastModified)'
        ],
        highlightPreTag: '<mark>',
        highlightPostTag: '</mark>',
        snippetEllipsisText: '...',
        removeWordsIfNoResults: 'allOptional',
        queryLanguages: ['en'],
        ignorePlurals: true,
        removeStopWords: true
      }
    });
    console.log('  ✓ Configured index settings');

    console.log('\n✅ Indexing completed successfully!');
    console.log(`🔍 You can now search your documentation at ${CONFIG.baseUrl}`);

    // Display some stats using the new API
    const searchResult = await client.searchSingleIndex({
      indexName: CONFIG.indexName,
      searchParams: {
        query: '',
        hitsPerPage: 0
      }
    });

    console.log(`\n📊 Index Statistics:`);
    console.log(`  Total records: ${searchResult.nbHits}`);
    console.log(`  Index name: ${CONFIG.indexName}`);
    console.log(`  App ID: ${CONFIG.appId}`);

  } catch (error) {
    console.error('\n❌ Error during indexing:', error);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  indexDocumentation()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}

module.exports = { indexDocumentation };
