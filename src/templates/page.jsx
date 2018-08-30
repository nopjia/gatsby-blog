import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export default ({ data, location }) => {
  const post = data.markdownRemark;

  return (
    <Layout location={location} title={post.frontmatter.title}>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
