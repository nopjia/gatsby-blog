import React from "react";
import { Link } from "gatsby";
import "normalize.css";

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
    <div className="layout">
      {header}
      {children}
    </div>
  );
};
