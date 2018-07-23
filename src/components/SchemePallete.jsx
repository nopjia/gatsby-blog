/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react";

const setScheme = (e) => {
  const prevElem = document.querySelector("div.scheme-palette>div.selected");
  const elem = e.target;
  if (elem === prevElem) {
    return;
  }

  document.body.className = elem.dataset.palette || "";
  elem.classList.add("selected");

  if (prevElem) {
    prevElem.classList.remove("selected");
  }

  // extract scheme colors for renderer
  // const bgcolor = rgbToHex(window.getComputedStyle(document.body).getPropertyValue("background-color"));
  // const color = rgbToHex(window.getComputedStyle(document.body).getPropertyValue("color"));
  // renderer.setColors(color, bgcolor);
  // console.log("Scheme: " + color + "," + bgcolor);
};

export default () => (
  <div className="scheme-palette">
    <div data-palette="dos" onClick={setScheme} />
    <div data-palette="sepia" onClick={setScheme} />
    <div data-palette="dark" onClick={setScheme} />
    <div data-palette="" onClick={setScheme} className="selected" />
  </div>
);
