import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PostList from "../components/PostList";

export default ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <h1>Articles</h1>
      <h2>
        what
        {"'"}s been on my mind
      </h2>
      <PostList edges={posts} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query PostsQuery {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
