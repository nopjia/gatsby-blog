import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

export default ({ data, location }) => {
  const pages = data.allSitePage.edges;
  const pagePaths = pages.map(({ node }) => node.path).sort();

  return (
    <Layout location={location}>
      <h1>Sitemap</h1>
      <h2>list of all pages</h2>
      <ul style={{ listStyleType: "none", marginLeft: 0 }}>
        {pagePaths.map((p) => (
          <li key={p}>
            <Link to={p}>{p}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const pageQuery = graphql`
  query AllPagesQuery {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`;
