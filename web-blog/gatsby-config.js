/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Web Blog",
    description: "Mini blog menggunakan Gatsby.js dan React.js",
    author: "Nafi",
    siteUrl: "https://example.com"
  },

  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`
      }
    },

    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: []
      }
    }
  ]
};