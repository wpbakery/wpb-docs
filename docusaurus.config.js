// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WPBakery API Documentation',
  tagline: 'WPBakery API Documentation',
  favicon: 'img/favico-32x32.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://kb.wpbakery.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Sidebar configuration - allow collapsing
          sidebarCollapsible: true, // Allow categories to be collapsible
          sidebarCollapsed: false, // Start with sidebar itself expanded
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'devs',
        path: 'devs',
        routeBasePath: 'devs',
        sidebarPath: './sidebars-devs.js',
        editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        sidebarCollapsible: true,
        sidebarCollapsed: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      algolia: {
        // Application ID from Algolia
        appId: 'I4BZ3VIOZE',
        // Search-only API key (safe to expose)
        apiKey: 'c8a06f55e31e2534400364d71aa03db3',
        // Index name with prefix
        indexName: 'wp_kb',
        // Disable contextual search for now
        contextualSearch: false,
        // Optional: Algolia search parameters
        searchParameters: {
          facetFilters: []
        },
        // Optional: path for search page
        searchPagePath: 'search',
      },
      navbar: {
        title: '',
        logo: {
          alt: 'WPBakery',
          src: 'img/wpbakery-logo-light.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guide',
          },
          {
            type: 'docSidebar',
            sidebarId: 'devsSidebar',
            docsPluginId: 'devs',
            position: 'left',
            label: 'Devs',
          },
          {
            href: 'https://support.wpbakery.com/?_gl=1*u2fsg8*_gcl_au*MTQzODY5MDUyOS4xNzcwMTE5ODI5',
            label: 'Customer Center',
            position: 'left',
            target: '_blank',
          },
          {
            href: 'https://wpbakery.com',
            label: 'Get WPBakery Page Builder',
            position: 'left',
            target: '_blank',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['php'],
      },
    }),
};

export default config;
