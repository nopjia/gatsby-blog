import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import PostList from "../components/PostList";

export default ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges;

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

  const postsSection = (
    <div className="section">
      <h1>Recent Articles</h1>
      <div className="layout23">
        <div>
          <h2>
            what
            {"'"}s been on my mind
          </h2>
          <PostList edges={posts} />
        </div>
        <div>
          <h2>read more</h2>
          <p>
            <Link to="/blog/">view all posts</Link>
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
          <h2>
            there
            {"'"}s more older stuff
          </h2>
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
            <a href="http://old.iamnop.com/">old website</a>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <Layout location={location}>
      {introSection}
      {postsSection}
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
          excerpt(pruneLength: 60)
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
