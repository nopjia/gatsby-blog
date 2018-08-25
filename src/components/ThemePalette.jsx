/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react";

const toHex = (x) => {
  return ("0" + parseInt(x).toString(16)).slice(-2);
};
const rgbToHex = (rgb) => {
  if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  return "#" + toHex(rgb[1]) + toHex(rgb[2]) + toHex(rgb[3]);
};

class ThemePalette extends React.Component {
  constructor(props) {
    super(props);

    document.body.className = document.body.className || "white";

    this.state = {
      theme: document.body.className,
    };
  }

  setTheme(theme) {
    this.setState({ theme });
    document.body.className = theme;

    // extract theme colors for renderer
    const bgcolor = rgbToHex(
      window
        .getComputedStyle(document.body)
        .getPropertyValue("background-color")
    );
    const color = rgbToHex(
      window.getComputedStyle(document.body).getPropertyValue("color")
    );

    // TODO: do this correctly the React way
    window.CANVAS_BACKGROUND.setColors(color, bgcolor);

    console.log("Theme: " + color + "," + bgcolor);
  }

  render() {
    const themes = ["white", "dark", "sepia", "dos"].reverse();

    return (
      <div className="theme-palette">
        {themes.map((t) => {
          return t === this.state.theme ? (
            <div
              key={t}
              data-palette={t}
              onClick={() => this.setTheme(t)}
              className="selected"
            />
          ) : (
            <div key={t} data-palette={t} onClick={() => this.setTheme(t)} />
          );
        })}
      </div>
    );
  }
}

export default ThemePalette;
