import React from "react";
import CanvasBackground from "../components/CanvasBackground";
import "normalize.css";
import "../components/styles/global.scss";

export default ({ children, location, title }) => {
  let pageTitle = title;
  if (!pageTitle) {
    pageTitle = location.pathname;
    pageTitle = pageTitle.charAt(1).toUpperCase() + pageTitle.slice(2, -1);
  }

  return (
    <div>
      <CanvasBackground />
      {children}
    </div>
  );
};
