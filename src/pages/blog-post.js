import * as React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";
const BlogPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`http://localhost:3000/posts/${id}`);
      const data = await response.json();
      setPost(data);
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <Layout pageTitle={post.title}>
      <p>{post.content}</p>
      <p>
        Author:{" "}
        <Link to={`/authors/${post.author._id}`}>{post.author.username}</Link>
      </p>
    </Layout>
  );
};

export const Head = ({ pageContext: { post } }) => <Seo title={post.title} />;

export default BlogPostPage;
