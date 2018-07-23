import React from "react";
import { graphql, Link } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";

import Bio from "../components/Bio";
import Layout from "../components/layout";
import { rhythm } from "../utils/typography";

export default ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <Helmet title={siteTitle} />
      <Bio />
      {posts.map(({ node }) => {
        const title = get(node, "frontmatter.title") || node.fields.slug;
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: "none" }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <span className="date">{node.frontmatter.date}</span>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        );
      })}
    </Layout>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
