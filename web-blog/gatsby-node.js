const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
    query {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `);

    if (result.errors) {
        throw result.errors;
    }

    const posts = result.data.allMarkdownRemark.nodes;

    posts.forEach((post) => {
        createPage({
            path: post.frontmatter.slug,
            component: path.resolve("./src/templates/blog-post.js"),
            context: {
                id: post.id
            }
        });
    });
};