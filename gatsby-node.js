// gatsby-node.js
exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const response = await fetch("http://localhost:3000/posts");
  const posts = await response.json();
  // Create a new page for each post
  posts.forEach((post) => {
    createPage({
      path: `/blog/${post._id}`,
      component: require.resolve("./src/templates/blog-post.js"),
      context: { post },
    });
  });
};
