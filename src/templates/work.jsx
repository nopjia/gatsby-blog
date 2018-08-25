import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export default ({ data, location }) => {
  const work = data.worksJson;

  return (
    <Layout location={location} title={work.title} width={900}>
      <div className="work">
        <a href={work.link}>
          <img src={work.image} alt={work.title} />
        </a>
        <div style={{ textAlign: "left" }}>
          <h1>{work.title}</h1>
          <p className="secondary">{work.date}</p>
          <p dangerouslySetInnerHTML={{ __html: work.desc }} />
          <h4>Tools</h4>
          <p>{work.tools}</p>
          <h4>Tags</h4>
          <p>{work.tags.join(", ")}</p>
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query WorkBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    worksJson(fields: { slug: { eq: $slug } }) {
      title
      desc
      tags
      tools
      date(formatString: "MMMM DD, YYYY")
      link
      image
    }
  }
`;
