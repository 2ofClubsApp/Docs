export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "2ofClubs",
      "logo": {
        "alt": "2ofClubs",
        "src": "img/logo.png"
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
          "href": "https://github.com/2-of-clubs",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Getting Started",
              "to": "docs/"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/2-of-clubs"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 2ofClubs."
    }
  },
  "title": "2ofClubs",
  "tagline": "Finding the perfect club for you!",
  "url": "https://2ofclubs.netlify.app/",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "2-of-clubs",
  "projectName": "2ofClubs/docs",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "welcome",
          "sidebarPath": "C:\\Users\\hello\\Desktop\\safe\\2ofclubs-docs\\sidebars.js"
        },
        "blog": {
          "showReadingTime": true
        },
        "theme": {
          "customCss": "C:\\Users\\hello\\Desktop\\safe\\2ofclubs-docs\\src\\css\\custom.css"
        }
      }
    ]
  ]
};