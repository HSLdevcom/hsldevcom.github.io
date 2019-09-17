module.exports = {
  siteMetadata: {
    siteUrl: `http://example.com`,
    title: `HSL developer documentation`,
    shareImage: ``,
    colors: {
      //https://www.hsl.fi/tyyliopas/varit
      primary: `#007AC9`,
      secondary: `#00B9E4`,
      background: `#BEE4F8`,
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`, //This plugin must be placed before 'gatsby-remark-prismjs' to avoid https://github.com/gatsbyjs/gatsby/issues/5764
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
        ],
      },
    },
  ],
}
