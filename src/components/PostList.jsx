import React from "react";
import { Link } from "gatsby";

export default ({ edges }) => {
  const posts = edges;
  return (
    <div className="posts">
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        const { excerpt } = node;
        return (
          <div key={node.fields.slug}>
            <Link style={{ boxShadow: "none" }} to={node.fields.slug}>
              {title}
            </Link>
            <span className="secondary"> - {node.frontmatter.date}</span>
            <p dangerouslySetInnerHTML={{ __html: excerpt }} />
          </div>
        );
      })}
    </div>
  );
};
