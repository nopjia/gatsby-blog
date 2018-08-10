/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react";

// TODO: do this correctly the React way

const toHex = (x) => {
  return ("0" + parseInt(x).toString(16)).slice(-2);
};
const rgbToHex = (rgb) => {
  if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  return "#" + toHex(rgb[1]) + toHex(rgb[2]) + toHex(rgb[3]);
};

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
  const bgcolor = rgbToHex(
    window.getComputedStyle(document.body).getPropertyValue("background-color")
  );
  const color = rgbToHex(
    window.getComputedStyle(document.body).getPropertyValue("color")
  );
  window.CANVAS_BACKGROUND.setColors(color, bgcolor);
  console.log("Theme: " + color + "," + bgcolor);
};

export default () => (
  <div className="theme-palette">
    <div data-palette="dos" onClick={setTheme} />
    <div data-palette="sepia" onClick={setTheme} />
    <div data-palette="dark" onClick={setTheme} />
    <div data-palette="white" onClick={setTheme} className="selected" />
  </div>
);
