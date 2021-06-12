module.exports = {
  siteMetadata: {
    title: `Janderson Constantino - Blog`,
    name: `Janderson Constantino`,
    siteUrl: `https://jandersonconstantino.com`,
    description: `Blog sobre JavaScript e tecnologia.`,
    hero: {
      heading: `Blog pessoal sobre tecnologia.`,
      maxWidth: 900,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/JandConstantino`,
      },
      {
        name: `github`,
        url: `https://github.com/JandersonConstantino`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/jandersonconstantino`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/jandersonconstantino`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
