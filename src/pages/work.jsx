import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import WorkList from "../components/WorkList";

export default ({ location, data }) => {
  const items = data.allWorksJson.edges.map(({ node }) => node);

  return (
    <Layout location={location}>
      <h1>Work</h1>
      <h2>what {"I've"} been working on</h2>
      <WorkList items={items} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query WorkQuery {
    site {
      siteMetadata {
        title
      }
    }
    allWorksJson(sort: { fields: date, order: DESC }) {
      edges {
        node {
          title
          type
          image
        }
      }
    }
  }
`;
