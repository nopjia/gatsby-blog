import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import SchemePallete from "./SchemePallete";
import siteConfig from "../../siteConfig";
import "normalize.css";
import "./styles/global.scss";

export default ({ children, location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let pageTitle = title;
  if (!pageTitle) {
    pageTitle = location.pathname;
    pageTitle = pageTitle.charAt(1).toUpperCase() + pageTitle.slice(2, -1);
  }
  if (pageTitle) {
    pageTitle = `${pageTitle} | ${siteConfig.title}`;
  } else {
    pageTitle = siteConfig.title;
  }

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
              <Link to="/work/">Work</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </h3>
        <hr />
      </div>
    );
  }

  const footer = (
    <div className="footer">
      <hr />
      <p>Copyright &copy; {new Date().getFullYear()} Nop Jiarathanakul</p>
    </div>
  );

  return (
    <div className="layout">
      <Helmet title={pageTitle} />
      {header}
      {children}
      {footer}
    </div>
  );
};
