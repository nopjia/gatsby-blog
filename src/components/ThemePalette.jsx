/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react";

const setTheme = (e) => {
  const prevElem = document.querySelector("div.theme-palette>div.selected");
  const elem = e.target;
  if (elem === prevElem) {
    return;
  }

  document.body.className = elem.dataset.palette || "";
  elem.classList.add("selected");

  if (prevElem) {
    prevElem.classList.remove("selected");
  }

  // extract theme colors for renderer
  // const bgcolor = rgbToHex(window.getComputedStyle(document.body).getPropertyValue("background-color"));
  // const color = rgbToHex(window.getComputedStyle(document.body).getPropertyValue("color"));
  // renderer.setColors(color, bgcolor);
  // console.log("Theme: " + color + "," + bgcolor);
};

export default () => (
  <div className="theme-palette">
    <div data-palette="dos" onClick={setTheme} />
    <div data-palette="sepia" onClick={setTheme} />
    <div data-palette="dark" onClick={setTheme} />
    <div data-palette="white" onClick={setTheme} className="selected" />
  </div>
);
