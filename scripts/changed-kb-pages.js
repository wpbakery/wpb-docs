#!/usr/bin/env node

/**
 * Lists the Knowledge Base pages changed between two commits as Slack links.
 *
 * Usage: node scripts/changed-kb-pages.js <before-sha> <after-sha>
 *
 * Run it after `npm run build`: page titles and URLs are read from the
 * metadata Docusaurus writes to .docusaurus, so custom slugs are respected.
 * Prints one Slack mrkdwn line per page, or nothing when no page changed
 * or the commit range can't be resolved.
 */

const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIRS = ['docs', 'devs'];
const METADATA_DIR = path.join(ROOT, '.docusaurus', 'docusaurus-plugin-content-docs');
const MAX_PAGES = 20;
const NO_COMMIT = /^0+$/;

const [before, after] = process.argv.slice(2);
const siteUrl = (process.env.SITE_URL || 'https://kb.wpbakery.com').replace(/\/+$/, '');

/**
 * Runs a git command in the repository root.
 *
 * @param {string[]} args Arguments passed to git.
 * @returns {string} Standard output of the command.
 * @throws {Error} When git exits with a non-zero code.
 */
function git(args) {
  return execFileSync('git', args, {
    cwd: ROOT,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'ignore'],
  });
}

/**
 * Checks that a commit is available in the local repository.
 *
 * @param {string} sha Commit SHA or other revision.
 * @returns {boolean} False when the commit is unknown, never throws.
 */
function commitExists(sha) {
  try {
    git(['cat-file', '-e', `${sha}^{commit}`]);
    return true;
  } catch {
    return false;
  }
}

/**
 * Lists the markdown files changed between the two commits.
 *
 * @returns {{status: string, file: string}[]} Status is the first letter git
 *   reports: A (added), D (deleted), M (modified) or, rarely, T (type changed).
 *   Renames are reported as a deletion and an addition.
 * @throws {Error} When git diff fails.
 */
function changedFiles() {
  const output = git([
    'diff', '--name-status', '--no-renames', before, after, '--', ...CONTENT_DIRS,
  ]);

  return output
    .split('\n')
    .filter(Boolean)
    .map((line) => {
      const [status, file] = line.split('\t');
      return { status: status[0], file };
    })
    .filter(({ file }) => /\.mdx?$/.test(file));
}

/**
 * Reads the page metadata written by the Docusaurus build.
 *
 * @returns {Map<string, {title?: string, permalink: string}>} Pages keyed by
 *   source file, for example "docs/faq/x.md". Empty when the site isn't built.
 * @throws {Error} When a metadata file can't be read or parsed.
 */
function loadPages() {
  const pages = new Map();
  if (!fs.existsSync(METADATA_DIR)) {
    return pages;
  }

  for (const plugin of fs.readdirSync(METADATA_DIR)) {
    const pluginDir = path.join(METADATA_DIR, plugin);
    if (!fs.statSync(pluginDir).isDirectory()) {
      continue;
    }

    for (const name of fs.readdirSync(pluginDir)) {
      if (!name.startsWith('site-') || !name.endsWith('.json')) {
        continue;
      }

      const doc = JSON.parse(fs.readFileSync(path.join(pluginDir, name), 'utf8'));
      if (doc.source && doc.permalink) {
        pages.set(doc.source.replace(/^@site\//, ''), doc);
      }
    }
  }

  return pages;
}

/**
 * Escapes text for use as the label of a Slack <url|label> link.
 *
 * @param {string} text Page title or file path.
 * @returns {string} Single-line label without Slack control characters.
 */
function slackLabel(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\|/g, '/')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Builds the public URL of a page.
 *
 * @param {string} permalink Site-relative path, for example "/docs/faq/x".
 * @returns {string} Absolute URL with a trailing slash.
 */
function pageUrl(permalink) {
  return `${siteUrl}${permalink.replace(/\/*$/, '/')}`;
}

/**
 * Prints the changed pages. Prints nothing when the commit range is missing
 * or unknown, as for a manually started workflow.
 *
 * @returns {void}
 * @throws {Error} When git diff or reading the metadata fails.
 */
function main() {
  if (!before || !after || NO_COMMIT.test(before) || !commitExists(before) || !commitExists(after)) {
    return;
  }

  const files = changedFiles();
  const pages = loadPages();
  const lines = [];

  if (files.length && !pages.size) {
    // Shown as a warning in the GitHub Actions log.
    console.error(`::warning::No page metadata found in ${METADATA_DIR}, changed pages can't be linked. Run the build first.`);
  }

  for (const { status, file } of files) {
    const page = pages.get(file);

    if (status === 'D' || !page) {
      // Deleted pages have no URL. Changed files with no page (partials) are skipped.
      if (status === 'D') {
        lines.push(`• ${slackLabel(file)} (removed)`);
      }
      continue;
    }

    const note = status === 'A' ? ' (new)' : '';
    lines.push(`• <${pageUrl(page.permalink)}|${slackLabel(page.title || file)}>${note}`);
  }

  const shown = lines.slice(0, MAX_PAGES);
  if (lines.length > MAX_PAGES) {
    shown.push(`…and ${lines.length - MAX_PAGES} more`);
  }

  if (shown.length) {
    process.stdout.write(`${shown.join('\n')}\n`);
  }
}

main();
