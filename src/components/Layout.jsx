import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Transition from "./Transition";
import ThemePallete from "./ThemePallete";
import CanvasBackground from "./CanvasBackground";
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
  let headTitle;
  if (pageTitle) {
    headTitle = `${pageTitle} | ${siteConfig.title}`;
  } else {
    headTitle = siteConfig.title;
  }

  const links = {
    Home: "/",
    Work: "/work/",
    Contact: "/contact/",
  };

  let header;

  if (location.pathname !== rootPath) {
    header = (
      <div className="navbar">
        <h3>
          <ThemePallete />
          <ul>
            {Object.keys(links).map((k) => {
              const v = links[k];
              return (
                <li key={k}>
                  {k === pageTitle ? <span>{k}</span> : <Link to={v}>{k}</Link>}
                </li>
              );
            })}
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
      <Helmet title={headTitle} />
      <CanvasBackground />
      <Transition location={location}>
        {header}
        {children}
        {footer}
      </Transition>
    </div>
  );
};
