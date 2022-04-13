// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AvatarConnect',
  url: 'https://avatarconnect.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon/favicon.ico',
  organizationName: 'AvatarConnect', // Usually your GitHub org/user name.
  projectName: 'avatarconnect.org', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'EYI7GNX5C8',
        apiKey: 'b68845b576cfa89562428f8a7871d0cc',
        indexName: 'avatarconnect.org'
      },
      announcementBar: {
        content:
        'AvatarConnect is now in Beta. Check our the <a target="_blank" rel="noopener noreferrer" href="https://github.com/AvatarConnect">source code</a>.',
        backgroundColor: 'var(--ifm-color-primary)',
        textColor: '#ffffff',
        isCloseable: false,
        id: "github-star",
      },
      image: '/branding/logo-dark.svg',
      navbar: {
        style: 'dark',
        logo: {
          alt: 'AvatarConnect',
          src: 'branding/logo-light.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            label: 'Integrations',
            type: 'dropdown',
            items: [
              {
                label: 'Unity SDK',
                href: 'https://www.facebook.com',
              },
              {
                label: 'Help Build an Integration',
                href: 'https://www.facebook.com',
              },
            ],
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/AvatarConnect',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AvatarConnect`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
