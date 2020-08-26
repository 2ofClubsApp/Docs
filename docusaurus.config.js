module.exports = {
  title: '2ofClubs',
  tagline: 'Finding the perfect club for you!',
  url: 'https://2ofclubs.netlify.app/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: '2-of-clubs', // Usually your GitHub org/user name.
  projectName: '2ofClubs/docs', // Usually your repo name.
  themeConfig: {
    announcementBar: {
      id: 'beta_test', // Any value that will identify this message.
      content:
          'We\'ll soon be releasing our application and will be looking for testers!',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
    },
    defaultDarkMode: true,
    navbar: {
      title: '2ofClubs',
      logo: {
        alt: '2ofClubs',
        src: 'img/logo.png',
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
          href: 'https://github.com/2ofClubsApp',
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
              label: 'Getting Started',
              to: 'docs/',
            }
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
              href: 'https://github.com/2-of-clubs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 2ofClubs.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {

        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'welcome',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
