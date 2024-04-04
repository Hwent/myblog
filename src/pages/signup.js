import * as React from "react";
import { Link, navigate } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const LoginPage = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (data.success) {
      // Handle successful login here
      console.log("User logged in", data);
      navigate("/blog");
    } else {
      // Handle login failure here
      console.error("Login failed", data.message);
      setErrorMessage(data.message);
    }
  };

  return (
    <Layout>
      <Seo title="Login" />
      <h1>Sign up</h1>
      <p>Sign up first</p>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default LoginPage;
