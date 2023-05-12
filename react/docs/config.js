const config = {
  gatsby: {
    pathPrefix: '/webfrontend_intro/react',
    siteUrl: 'https://www.access-company.com/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://access-company.github.io/webfrontend_intro/react/logo_access.svg',
    logoLink: 'https://www.access-company.com/',
    title: '',
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: '',
    links: [
      {
        text: 'MindMap',
        link: 'https://drive.google.com/open?id=1XNs1w0YVVRLVVV03vuULRP-_WNv6nM4-',
      },
    ],
    search: {
      enabled: false,
      indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/preparation',
      '/why_need_react',
      '/toc',
    ],
    collapsedNav: [
      '/01_learning_jsx',
      '/02_element_render',
      '/03_components_props',
      '/04_event',
      '/05_if_render',
      '/06_list_key',
      '/07_lifecycle',
      '/08_state',
      '/09_multi_state',
      '/10_hooks_rule',
      '/11_object_is',
      '/12_effect',
      '/13_another_hooks',
      '/14_performance',
      '/15_advanced',
      '/99_appendix',
    ],
    links: [
      {
        text: '課題解答例',
        link: 'https://docs.google.com/document/d/1lp5huS7yNKZVibMzCo9wPSEKHOWp9W5NACJRyEWGl_Y/edit?usp=sharing',
      },
      {
        text: 'React公式 スタートガイド',
        link: 'https://ja.reactjs.org/docs/getting-started.html',
      },
      {
        text: 'CodePen',
        link: 'https://codepen.io/',
      },
    ],
    frontline: true,
    ignoreIndex: true,
    title:
      "<div class='greenCircle'></div><span><a href='https://access-company.github.io/webfrontend_intro/react/'>React Training</a></span>", // TODO: ADD STATIC PAGE URL
  },
  siteMetadata: {
    title: '',
    description: '',
    ogImage: null,
    docsLocation: '',
    favicon: '',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'React Training',
      short_name: 'ReactTraining',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
