import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'MVSOCE Documentation',
  tagline: 'discord.gg/mvsoce',
  favicon: 'img/logo.ico',

  // Set the production url of your site here
  url: 'https://doyeongk.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/mvsoce-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'doyeongk', // Usually your GitHub org/user name.
  projectName: 'mvsoce-docs', // Usually your repo name.

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.jpg',
    navbar: {
      title: 'MVSOCE Docs',
      logo: {
        alt: 'MVSOCE Logo',
        src: 'img/logo.jpg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/doyeongk/mvsoce-docs',
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
              label: 'Discord',
              href: 'https://discordapp.com/invite/mvsoce',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/MultiVersus_OCE',
            },
            {
              label: 'Twitch',
              href: 'https://twitch.tv/MultiVersus_OCE',
            },
            {
              label: 'YouTube',
              href: 'https://youtube.com/@mvsoce',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'start.gg',
              href: 'https://start.gg/hub/multiversus-oce',
            },
            {
              label: 'GitHub Organisation',
              href: 'https://github.com/MultiVersus-Oceania',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MultiVersus OCE. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
