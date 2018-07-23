import React from "react";
import { Link } from "gatsby";

import { rhythm } from "../utils/typography";

export default ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <Link to="/">Gatsby Starter Blog</Link>
      </h1>
    );
  } else {
    header = (
      <h3>
        <Link to="/">Gatsby Starter Blog</Link>
      </h3>
    );
  }

  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: rhythm(30),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      {header}
      {children}
    </div>
  );
};
