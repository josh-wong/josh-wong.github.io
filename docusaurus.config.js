// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '080f53',
  tagline: "Ramblings of a technical writer in Japan🗾",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.080f53.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'josh-wong', // Usually your GitHub org/user name.
  projectName: 'josh-wong.github.io', // Usually your repo name.

  onBrokenLinks: 'warn',
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
          path: 'docs/portfolio',
          routeBasePath: 'portfolio',
          sidebarPath: './sidebars.js',
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl:
        //   //   'https://github.com/josh-wong/josh-wong.github.io/',
        },
        blog: {
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: 'all',
            copyright: 'Copyright © ${new Date().getFullYear()} 080f53',
            limit: null,
          },
          routeBasePath: '/',
          showReadingTime: true,          
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/josh-wong/josh-wong.github.io',
        },
        googleTagManager: {
          containerId: 'GT-5M8TXX7',
        },
        gtag: {
          trackingID: 'G-PMP34RZWN2P',
          anonymizeIP: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  
  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/favicon.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(8, 15, 83)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#FFFFFF',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/favicon.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/favicon.png',
            color: 'rgb(8, 15, 83)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/favicon.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#FFFFFF',
          },
        ],
      },
    ]
  ],
  
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/site-logo.png',
      navbar: {
        title: '',
        logo: {
          alt: '080f53 logo',
          src: 'img/site-logo.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'sidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {to: '/', label: 'Blog', position: 'left'},
          {to: 'portfolio/', label: 'Portfolio', position: 'left'},
          {to: 'about/', label: 'About', position: 'left'},
          {
            className: 'header-rss-link',
            href: 'https://www.080f53.com/rss.xml',
            position: 'right',
            'aria-label': 'RSS',
          },
          {
            className: 'header-github-link',
            href: 'https://github.com/josh-wong/josh-wong.github.io',
            position: 'right',
            'aria-label': 'GitHub logo',
          },
          {
            className: 'header-status-link',
            href: 'https://status.080f53.com',
            position: 'right',
            'aria-label': 'Better Status logo',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Creative',
        //         to: '/docs/creative',
        //       },
        //       {
        //         label: 'Notes',
        //         to: '/docs/notes',
        //       },
        //       {
        //         label: 'Scripts',
        //         to: '/docs/scripts',
        //       },
        //       {
        //         label: 'Software',
        //         to: '/docs/software',
        //       },
        //       {
        //         label: 'Tutorials',
        //         to: '/docs/tutorials',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/josh-wong',
        //       },
        //       {
        //         label: 'LinkedIn',
        //         href: 'https://www.linkedin.com/in/wongjoshua',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/080f53',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} 080f53. <a href="https://docusaurus.io/" style="color: #757cbd">Built with Docusaurus</a>.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      mermaid: {
        theme: {
          light: 'base',
          dark: 'base',
        },
        options: {
          themeVariables: {
            primaryColor: '#D5EAFF',
            primaryTextColor: '#3D4144',
            primaryBorderColor: '#080f53',
            lineColor: '#3D4144',
            secondaryColor: '#D5EAFF',
            tertiaryColor: '#D5EAFF',
          },
        },
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'E5HTYXABYL',
  
        // Public API key: it is safe to commit it
        apiKey: 'bb14e2a521033a0d29bb5753f7329567',
  
        indexName: '080f53',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: true,
  
        //... other Algolia params
      },
    }),
};

export default config;
