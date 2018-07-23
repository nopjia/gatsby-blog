import React from "react";
import { Link } from "gatsby";
import SchemePallete from "./SchemePallete";
import "normalize.css";
import "./styles/global.scss";

export default ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname !== rootPath) {
    header = (
      <div className="navbar">
        <h3>
          <SchemePallete />
          <ul>
            <li>
              <Link to="/">Home</Link>
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
