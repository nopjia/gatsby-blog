import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import PostList from "../components/PostList";
import WorkItem from "../components/WorkItem";

export default ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges;
  const works = [data.allWorksJson.edges[0], data.allWorksJson.edges[3]]; // manually picking 2 featured items

  const introSection = (
    <div className="section">
      <h1>Nop Jiarathanakul</h1>
      <div className="layout23">
        <div>
          <h2>creative coder</h2>
          <p>
            Hello! I{"'"}m 75% technologist, 25% artist, and 100% perfectionist.
            I love making things, especially pretty 3D things with code!
          </p>
          <p>
            My background is in computer graphics, games, and animation. I
            graduated from the{" "}
            <a href="http://www.upenn.edu/">University of Pennsylvania</a> in{" "}
            <a href="http://cg.cis.upenn.edu/">computer graphics</a>. Then I
            went on to work in animation and gaming for a while at various
            places. Now I{"'"}m at{" "}
            <a href="http://www.autodesk.com/">Autodesk</a> working on an
            exciting <a href="http://lmv.rocks/">new web viewer</a>.
          </p>
        </div>
        <div>
          <h2>I like...</h2>
          <p>
            webgl
            <br />
            shaders
            <br />
            three.js
            <br />
            typography
            <br />
            indie rock
          </p>
        </div>
      </div>
    </div>
  );

  const worksSection = (
    <div className="section">
      <h1>Featured</h1>
      <h2>recent projects</h2>
      <div className="works narrow">
        {works.map(({ node }) => (
          <WorkItem
            key={node.title}
            title={node.title}
            slug={node.fields.slug}
            image={node.images[0]}
          />
        ))}
      </div>
      <p>
        <Link to="/works/">see more projects →</Link>
      </p>
    </div>
  );

  const postsSection = (
    <div className="section">
      <h1>Articles</h1>
      <h2>
        what
        {"'"}s been on my mind
      </h2>
      <PostList edges={posts} />
      <p>
        <Link to="/posts/">see all posts →</Link>
      </p>
    </div>
  );

  const hireSection = (
    <div className="section">
      <h1>Hire Me</h1>
      <div className="layout23">
        <div>
          <h2>need a graphics guy?</h2>
          <p>
            Looking for hand-crafted, high-end, interactive 3D experiences for
            your website or product? I{"'"}m available for consulting,
            freelance, and contract work.
          </p>
          <p>
            <Link to="/hire/">read more →</Link>
          </p>
        </div>
        <div>
          <h2>download</h2>
          <p>
            <a href="/jiarathanakul.pdf">resume</a>
          </p>
        </div>
      </div>
    </div>
  );

  const furtherSection = (
    <div className="section">
      <h1>Further Reading</h1>
      <div className="layout23">
        <div>
          <h2>some older stuff</h2>
          <p>
            If you
            {"'"}
            re feeling curious, you can look around my{" "}
            <a href="http://old.iamnop.com/">old website</a>, when I was still
            in college and jQuery was all the rage. In my defense, it was a
            decent website for 2010. It even got featured{" "}
            <a href="http://www.instantshift.com/2011/02/17/70-fresh-and-creative-single-page-website-designs/">
              here
            </a>
            ,{" "}
            <a href="http://designm.ag/design/35-nice-single-page-web-designs/">
              here
            </a>
            , and <a href="https://onepagelove.com/nop-jiarathanakul">here</a>.
            Feel free to look around at my older stuff—just don
            {"'"}t tease me about them later!
          </p>
        </div>
        <div>
          <h2>see also</h2>
          <p>
            <a href="http://nopjia.blogspot.com/">old blog</a>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <Layout location={location}>
      {introSection}
      {worksSection}
      {postsSection}
      {hireSection}
      {furtherSection}
    </Layout>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      edges {
        node {
          excerpt(pruneLength: 90)
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
    allWorksJson(
      filter: { tags: { in: "featured" } }
      sort: { fields: date, order: DESC }
      limit: 10
    ) {
      edges {
        node {
          title
          tags
          images
          fields {
            slug
          }
        }
      }
    }
  }
`;
