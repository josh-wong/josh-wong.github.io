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
    defaultLocale: 'en-us',
    locales: ['en-us', 'ja-jp'],
    localeConfigs: {
      'en-us': {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'versioned_docs/en-us',
      },
      'ja-jp': {
        label: '日本語',
        direction: 'ltr',
        htmlLang: 'ja-JP',
        calendar: 'gregory',
        path: 'versioned_docs/ja-jp',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/projects',
          sidebarPath: './sidebars.js',
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl:
        //   //   'https://github.com/josh-wong/josh-wong.github.io/',
        },
        blog: {
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          postsPerPage: 5,
          feedOptions: {
            type: 'all',
            title: '',
            description: '',
            copyright: 'Copyright © ${new Date().getFullYear()} 080f53',
            limit: null,
          },
          routeBasePath: 'blog',
          path: 'blog',
          showReadingTime: true,
          onUntruncatedBlogPosts: 'ignore',          
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
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/blog/2023/03/03/fixing-iphone-obsidian-sync-issue',
            from: '/blog/2023/03/how-to-fix-an-issue-with-the-obsidian-app-not-opening-and-syncing-on-your-iphone',
          },
        ],
      },
    ],
    require.resolve('docusaurus-plugin-image-zoom'),
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
          'always',
          'mobile',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: 'img/favicon.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#080f53',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#080f53',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/favicon.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/favicon.svg',
            color: '#080f53',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/favicon.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#080f53',
          },
        ],
      },
    ],
  ],
  
  markdown: {
    mermaid: true,
  },

  themes: [
    '@docusaurus/theme-mermaid',
    'docusaurus-theme-github-codeblock'
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // announcementBar: {
      //   id: 'announcement_bar',
      //   content:
      //     'MESSAGE WITH A <a href="URL">LINK IF NECESSARY</a>!',
      //   backgroundColor: '#7c83c2',
      //   textColor: '#ffffff',
      //   isCloseable: true,
      // },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      // Replace with your project's social card
      image: 'img/site-logo.png',
      navbar: {
        title: '',
        logo: {
          alt: '080f53 logo',
          src: 'img/site-logo.png',
          srcDark: 'img/site-logo-dark.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'sidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            type: 'dropdown',
            label: 'Projects',
            to: 'projects',
            position: 'left',
            items: [
              {
                type: 'doc',
                label: 'Baird beer profile quadrants🍺',
                docId: 'baird-beer-quadrants/index',
              },
              {
                type: 'doc',
                label: 'Bitcoin Cash Node on Raspberry Pi🪙',
                docId: 'bitcoin-cash-node-on-raspberry-pi/index',
              },
              {
                type: 'doc',
                label: 'Microsoft Zune device and software setup🎵',
                docId: 'zune-software-setup/index',
              },
              {
                type: 'doc',
                label: 'Music collection💿',
                docId: 'music-collection/index',
              },
              {
                type: 'doc',
                label: 'passGen🔐',
                docId: 'passgen/index',
              },
              {
                type: 'doc',
                label: 'Signal sticker packs🎁',
                docId: 'signal-stickers/index',
              },
            ],
          },
          {to: 'about', label: 'About', position: 'left'},
          // Custom notification as a React component.
          {
            type: 'custom-NotificationBell',
            position: 'right',
            notifications: [ // Instead of deleting notifications, just comment them out so that it's easier to see the history of notifications.
              {
                id: 4,
                message: 'New Signal sticker pack!: 1950s-60s Blue Note jazz musicians🎷',
                url: 'https://signal.art/addstickers/#pack_id=b406d0f0636508c14222022baa9af677&pack_key=e0641dcf015b9bc27ebbbf6795fc90076e697702221f68e8c74afc0e86332539'
              },
              {
                id: 3,
                message: 'New feature!: Site notifications🚨',
                url: '/blog/2024/11/20/site-notification-feature'
              },
              {
                id: 2,
                message: 'Check out the unofficial Baird beer flavor quadrants🍺',
                url: '/projects/baird-beer-quadrants'
              },
              // {
              //   id: 1,
              //   message: 'Enjoy Baird beer? Ask the unofficial AI chatbot for recommendations🤖',
              //   url: 'https://typebot.co/baird-beer-recommendations-experimental-080f53'
              // },
            ],
          },
          {
            className: 'header-rss-link',
            href: 'https://www.080f53.com/blog/rss.xml',
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
            className: 'header-better-stack-icon',
            href: 'https://status.080f53.com',
            position: 'right',
            'aria-label': 'Better Stack logo',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '080F53',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Projects',
                to: '/projects',
              },
              {
                label: 'About',
                to: '/about',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/josh-wong',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/wongjoshua',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/080f53',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 080f53. <a href="https://docusaurus.io/" style="color: #757cbd">Built with Docusaurus</a>.`,
      },
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
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
      // GitHub code block theme configuration
      codeblock: {
        showGithubLink: true,
        githubLinkLabel: 'View on GitHub',
      },
    }),
};

export default config;
