import React from "react";
import Helmet from "react-helmet";
import Transition from "./Transition";
import siteConfig from "../../siteConfig";
import "normalize.css";
import "./styles/global.scss";
import Navigation from "./Navigation";

export default ({ children, location, title, width }) => {
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

  const footer = (
    <div className="footer">
      <p>Copyright &copy; {new Date().getFullYear()} Nop Jiarathanakul</p>
    </div>
  );

  const style = width ? { maxWidth: `${width}px` } : {};
  return (
    <div className="layout" style={style}>
      <Helmet title={headTitle} />
      <Transition location={location}>
        <Navigation location={location} />
        <div className="content">{children}</div>
        {footer}
      </Transition>
    </div>
  );
};
