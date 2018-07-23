import React from "react";
import { Link } from "gatsby";

import { rhythm } from "../utils/typography";

export default ({ siteTitle, location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    );
  } else {
    header = (
      <div className="navbar">
        <h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Work</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </h3>
        <hr />
      </div>
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
