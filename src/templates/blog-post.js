import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";
const BlogPost = ({ pageContext: { post } }) => (
  <Layout pageTitle={post.title}>
    <p>{post.content}</p>
    <p>
      Author:{" "}
      <Link to={`/authors/${post.author._id}`}>{post.author.username}</Link>
    </p>
  </Layout>
);

export const Head = ({ pageContext: { post } }) => <Seo title={post.title} />;

export default BlogPost;
