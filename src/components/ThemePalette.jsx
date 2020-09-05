/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react";
import initVerbose from "../utils/verbose";

const verbose = initVerbose(true);

const toHex = (x) => `0${parseInt(x, 10).toString(16)}`.slice(-2);
const rgbToHex = (s) => {
  if (/^#[0-9A-F]{6}$/i.test(s)) return s;
  const rgb = s.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  return `#${toHex(rgb[1])}${toHex(rgb[2])}${toHex(rgb[3])}`;
};

class ThemePalette extends React.Component {
  constructor(props) {
    super(props);

    let theme = "white";
    if (typeof window !== "undefined") {
      theme = document.body.className || theme;
      document.body.className = theme;
    }

    this.state = {
      theme,
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

    verbose(`Theme: ${color},${bgcolor}`);
  }

  render() {
    const themes = ["white", "dark", "sepia", "dos"].reverse();
    const { theme } = this.state;

    return (
      <div className="theme-palette">
        {themes.map((t) =>
          t === theme ? (
            <div
              key={t}
              data-palette={t}
              onClick={() => this.setTheme(t)}
              className="selected"
            />
          ) : (
            <div key={t} data-palette={t} onClick={() => this.setTheme(t)} />
          )
        )}
      </div>
    );
  }
}

export default ThemePalette;
