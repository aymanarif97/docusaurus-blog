module.exports = {
  title: 'Ayman Blog',
  tagline: 'Welcome to technical blog by yours truly!',
  url: 'https://ayman-blog.netlify.app',
  baseUrl: '/',
  favicon: 'https://images.squarespace-cdn.com/content/v1/5883caad59cc684854aef84c/1508481793651-279DZYIVW4B6DHIARAWN/ke17ZwdGBToddI8pDm48kHFnmntegnVXpN4y4ldn3ixZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxco7Gi2cI2YfBk8ZWdc_m6Xcr86dXh8TsiE3NyioNRZj9sD37Ved1vsRvl2h0UxBw/A+blank.JPG',
  organizationName: 'Ayman/Arif', // Usually your GitHub org/user name.
  projectName: 'docusaurus-blog', // Usually your repo name.
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      title: "Ayman's Blog",
      logo: {
        alt: 'Ayman',
        src: 'https://www.pinclipart.com/picdir/big/229-2290719_alien-meets-arrival-inspired-the-heptapod-language-clipart.png',
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
          position: 'right',
          className: 'header-github-link',
          alt: 'Hello',
          'aria-label': 'GitHub repository',
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
              label: 'Docusaurus',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/ayman-arif-patel-300683127/',
            },
            {
              label: 'Gitlab',
              href: 'https://github.com/AymanArif',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/@aymanarif/the-hype-cycle-bdbb1adec14',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/AymanArif',
            },
            {
              label: 'Gitlab',
              href: 'https://github.com/AymanArif',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/@aymanace97',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} This blog is with Docusaurus and Netlify`,
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
            'https://github.com/AymanArif/docusaurus-blog/edit/master/website/',
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
