import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Aimage from "../components/Aimage";

const getImageUrl = (url) =>
  url.indexOf("http") === -1 ? `/portfolio/${url}` : url;

export default ({ data, location }) => {
  const work = data.worksJson;

  let linkSection;
  if (work.link) {
    linkSection = (
      <div>
        <h4>Link</h4>
        <p>
          <a href={work.link}>{work.link}</a>
        </p>
      </div>
    );
  }

  const firstImageElem = (
    <Aimage image={getImageUrl(work.images[0])} title={work.title} />
  );
  const restOfImages = work.images.slice(1);

  let youtubeElem;
  if (work.youtube) {
    youtubeElem = (
      <div className="iframewrap">
        <iframe
          title="Youtube"
          src={`https://www.youtube.com/embed/${work.youtube}?rel=0&showinfo=0`}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    );
  }

  const detailElem = (
    <div className="detail">
      <h1>{work.title}</h1>
      <p className="secondary">{work.date}</p>
      <p dangerouslySetInnerHTML={{ __html: work.desc }} />
      {linkSection}
      <h4>Tools</h4>
      <p>{work.tools}</p>
      <h4>Tags</h4>
      <p>{work.tags.join(", ")}</p>
    </div>
  );

  return (
    <Layout location={location} title={work.title} width={900}>
      <div className="work">
        <div>
          {firstImageElem}
          {detailElem}
          {youtubeElem}
          {restOfImages.map((image) => (
            <a className="image" href={getImageUrl(image)} key={image}>
              <img src={getImageUrl(image)} alt={work.title} />
            </a>
          ))}
        </div>
        {detailElem}
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
      images
      youtube
    }
  }
`;
