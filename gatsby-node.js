// gatsby-node.js
const path = require(`path`);
const fetch = require("node-fetch");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  // Fetch your posts
  const postsResponse = await fetch("http://localhost:3000/posts");
  const posts = await postsResponse.json();

  // Create a page for each post
  posts.forEach((post) => {
    createPage({
      path: `/blog/${post._id}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        id: post._id,
      },
    });
  });
};
