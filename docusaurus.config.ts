import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Project-U',
  tagline: '미국 생활 적응 가이드',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://jeonck.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/us-start/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jeonck', // Usually your GitHub org/user name.
  projectName: 'us-start', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jeonck/us-start/tree/main/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '전체 포스트',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jeonck/us-start/tree/main/',
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
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Project-U',
      logo: {
        alt: 'Project-U Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/docs/english/speaking', label: '🗣️ 영어', position: 'left'},
        {to: '/docs/housing/overview', label: '🏠 주거', position: 'left'},
        {to: '/docs/admin/overview', label: '📋 행정', position: 'left'},
        {to: '/docs/education/overview', label: '🎓 교육', position: 'left'},
        {to: '/docs/finance/overview', label: '💰 금융', position: 'left'},
        {to: '/docs/leisure/golf/overview', label: '🏌️ 골프', position: 'left'},
        {to: '/docs/lifestyle/overview', label: '🍎 맛집/생활', position: 'left'},
        {to: '/blog', label: '블로그', position: 'left'},
        {
          href: 'https://github.com/jeonck/us-start',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '컨텐츠',
          items: [
            {
              label: '생활 정보',
              to: '/docs/',
            },
          ],
        },
        {
          title: '커뮤니티',
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
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: '더 보기',
          items: [
            {
              label: '블로그',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/jeonck/us-start',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Project-U. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
