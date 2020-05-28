


module.exports = {
  title: 'Ayman Blog',
  tagline: 'Welcome to technical blog by yours truly!',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Ayman/Arif', // Usually your GitHub org/user name.
  projectName: 'docusaurus-blog', // Usually your repo name.
  themeConfig: {
    /*
    navbar: {
      title: "Ayman's Blog",
      logo: {
        alt: 'My Site Logo',
        src: 'https://pbs.twimg.com/profile_images/1158072032338124801/z7XafZpg_400x400.jpg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/AymanArif',
          className: 'header-github-link',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    */
   navbar: {
    hideOnScroll: true,
    title: "Ayman's Blog",
    logo: {
      alt: 'Ayman',
      src: 'https://www.pinclipart.com/picdir/big/229-2290719_alien-meets-arrival-inspired-the-heptapod-language-clipart.png',
    },
    links: [
      {
        to: 'docs',
        activeBasePath: 'docs',
        label: 'Docs',
        position: 'left',
      },
      {to: 'blog', label: 'Blog', position: 'left'},
      {
        href: 'https://github.com/AymanArif',
        position: 'right',
        className: 'header-github-link',
        alt: 'Hello',
        'aria-label': 'GitHub repository',
      },
      {
        href: 'https://twitter.com/@aymanace97',
        position: 'right',
        className: 'header-twitter-link',
        alt: 'Hello',
        'aria-label': 'Twitter',
      },
      {
        href: 'https://twitter.com/@aymanace97',
        position: 'right',
        className: 'header-twitter-link',
        alt: 'Hello',
        'aria-label': 'Linkedin',
      },
    ],
  },
    algolia: {
      apiKey: 'f525c011a89da812bb79972c20a078ec',
      indexName: 'Blog',
      appId: 'app-id', // Optional, if you run the DocSearch crawler on your own
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
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
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ayman's Blog was built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
