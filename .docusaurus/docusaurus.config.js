export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "hideOnScroll": true,
      "title": "Ayman's Blog",
      "logo": {
        "alt": "Ayman",
        "src": "https://www.pinclipart.com/picdir/big/229-2290719_alien-meets-arrival-inspired-the-heptapod-language-clipart.png"
      },
      "links": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/AymanArif",
          "position": "right",
          "className": "header-github-link",
          "alt": "Hello",
          "aria-label": "GitHub repository"
        }
      ]
    },
    "algolia": {
      "apiKey": "f525c011a89da812bb79972c20a078ec",
      "indexName": "Blog",
      "appId": "app-id",
      "algoliaOptions": {}
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Docusaurus",
              "to": "docs/"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "LinkedIn",
              "href": "https://www.linkedin.com/in/ayman-arif-patel-300683127/"
            },
            {
              "label": "Gitlab",
              "href": "https://github.com/AymanArif"
            },
            {
              "label": "Medium",
              "href": "https://medium.com/@aymanarif/the-hype-cycle-bdbb1adec14"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/AymanArif"
            },
            {
              "label": "Gitlab",
              "href": "https://github.com/AymanArif"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/@aymanace97"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 This blog is with Docusaurus and Netlify"
    }
  },
  "title": "Ayman Blog",
  "tagline": "Welcome to technical blog by yours truly!",
  "url": "https://ayman-blog.netlify.app",
  "baseUrl": "/",
  "favicon": "https://images.squarespace-cdn.com/content/v1/5883caad59cc684854aef84c/1508481793651-279DZYIVW4B6DHIARAWN/ke17ZwdGBToddI8pDm48kHFnmntegnVXpN4y4ldn3ixZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxco7Gi2cI2YfBk8ZWdc_m6Xcr86dXh8TsiE3NyioNRZj9sD37Ved1vsRvl2h0UxBw/A+blank.JPG",
  "organizationName": "Ayman/Arif",
  "projectName": "docusaurus-blog",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "doc1",
          "sidebarPath": "/home/ayman/Documents/docusaurus-blog/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/home/ayman/Documents/docusaurus-blog/src/css/custom.css"
        }
      }
    ]
  ]
};