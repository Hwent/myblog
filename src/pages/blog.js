import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPage = ({ data }) => {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <Layout pageTitle="My Blog Posts">
      <h2>Static posts</h2>
      <ul>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))}
      </ul>
      <h2>Dynamic posts</h2>
      <ul>
        {posts.map((post) => (
          <article key={post._id}>
            <h2>
              <Link to={`/blog/${post._id}`}>{post.title}</Link>
            </h2>
            <p>Posted: {post.createdAt}</p>
            <p>{post.content}</p>
            <p>
              Author:{" "}
              <Link to={`/authors/${post.author._id}`}>
                {post.author.username}
              </Link>
            </p>
          </article>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
