/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Achaari Jaouad`,
    author: `Achaari Jaouad`,
    description: `Full-Stack WebDeveloper`,
    url: "https://achaarijaouad.netlify.app",
    image: "/AchaariPortfolio.png",
    twitterUsername: "@Jaouad99678541",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Grand Hotel`],
      },
    },
  ],
};
