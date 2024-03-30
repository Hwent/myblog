import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const LoginPage = () => (
  <Layout>
    <Seo title="Login" />
    <h1>Login</h1>
    <p>Welcome back! Please login to your account.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default LoginPage;
