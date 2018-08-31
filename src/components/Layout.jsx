import React from "react";
import Helmet from "react-helmet";
import siteConfig from "../../siteConfig";
import Navigation from "./Navigation";

export default ({ children, location, title, width }) => {
  let pageTitle = title;
  if (!pageTitle) {
    pageTitle = location.pathname.slice(1, -1);
    if (pageTitle)
      pageTitle = pageTitle
        .split("-")
        .map((word) => word.replace(word[0], word[0].toUpperCase()))
        .join(" ");
  }
  if (pageTitle) pageTitle = `${pageTitle} | ${siteConfig.title}`;
  else pageTitle = siteConfig.title;

  const footer = (
    <div className="footer">
      <p>
        Copyright &copy; {new Date().getFullYear()} {siteConfig.author}
      </p>
    </div>
  );

  const style = width ? { maxWidth: `${width}px` } : {};
  return (
    <div className="layout" style={style}>
      <Helmet title={pageTitle}>
        <meta name="description" content={siteConfig.description} />
      </Helmet>
      <Navigation location={location} />
      <div className="content">{children}</div>
      {footer}
    </div>
  );
};
