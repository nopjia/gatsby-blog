import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import WorkItem from "../components/WorkItem";

export default ({ location, data }) => {
  const items = data.allWorksJson.edges;

  return (
    <Layout location={location}>
      <h1>Work</h1>
      <h2>what {"I've"} been working on</h2>
      <p>
        <b>Categories:</b> code, web, design, traditional
      </p>
      <div className="works">
        {items.map(({ node }) => (
          <WorkItem key={node.title} title={node.title} image={node.image} />
        ))}
      </div>
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
    allWorksJson(
      filter: { type: { eq: "code" } }
      sort: { fields: date, order: DESC }
    ) {
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
