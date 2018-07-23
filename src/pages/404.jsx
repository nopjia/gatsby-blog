import React from "react";
import Layout from "../components/Layout";

export default ({ location }) => (
  <Layout location={location}>
    <h1>404</h1>
    <h2>not found</h2>
    <p>Sorry. This page does not exist.</p>
  </Layout>
);
