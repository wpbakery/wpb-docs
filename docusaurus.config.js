// @ts-check

import dotenv from 'dotenv';
import {themes as prismThemes} from 'prism-react-renderer';
import redirects from './redirects.js';

dotenv.config({path: '.env.local'});

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WPBakery API Documentation',
  tagline: 'WPBakery API Documentation',
  favicon: 'img/favico-32x32.png',

  future: {
    v4: true,
  },

  url: process.env.SITE_URL || 'https://kb.wpbakery.com',
  baseUrl: '/',

  organizationName: 'wpbakery',
  projectName: 'wpb-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          // editUrl: 'https://github.com/wpbakery/wpb-docs/edit/main/',
          sidebarCollapsible: true,
          sidebarCollapsed: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // editUrl: 'https://github.com/wpbakery/wpb-docs/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        googleTagManager: {
          containerId: 'GTM-5QKCSM9',
        },
      }),
    ],
  ],

  clientModules: ['./src/clientModules/routeWatcher.js'],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'devs',
        path: 'devs',
        routeBasePath: 'devs',
        sidebarPath: './sidebars-devs.js',
        // editUrl: 'https://github.com/wpbakery/wpb-docs/edit/main/',
        sidebarCollapsible: true,
        sidebarCollapsed: false,
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      algolia: {
        appId: process.env.ALGOLIA_APP_ID || 'I4BZ3VIOZE',
        apiKey: process.env.ALGOLIA_SEARCH_API_KEY || 'c8a06f55e31e2534400364d71aa03db3',
        indexName: 'wp_kb',
        contextualSearch: false,
        searchParameters: {
          facetFilters: []
        },
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
            label: 'Documentation',
          },
          {
            type: 'docSidebar',
            sidebarId: 'devsSidebar',
            docsPluginId: 'devs',
            position: 'left',
            label: 'Development',
          },
          {
            href: 'https://support.wpbakery.com/?_gl=1*u2fsg8*_gcl_au*MTQzODY5MDUyOS4xNzcwMTE5ODI5',
            label: 'Customer center ↗',
            position: 'right',
            target: '_blank',
          },
          {
            href: 'https://wpbakery.com',
            label: 'Get WPBakery ↗',
            position: 'right',
            target: '_blank',
          },
        ],
      },
      footer: {
        copyright: 'Copyright © 2026 Rain-Task Ltd. All Rights Reserved.',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['php'],
      },
    }),
};

export default config;
