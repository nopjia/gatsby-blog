/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react";

const toHex = (x) => `0${parseInt(x, 10).toString(16)}`.slice(-2);
const rgbToHex = (s) => {
  if (/^#[0-9A-F]{6}$/i.test(s)) return s;
  const rgb = s.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  return `#${toHex(rgb[1])}${toHex(rgb[2])}${toHex(rgb[3])}`;
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

    console.log(`Theme: ${color},${bgcolor}`);
  }

  render() {
    const themes = ["white", "dark", "sepia", "dos"].reverse();
    const { theme } = this.state;

    return (
      <div className="theme-palette">
        {themes.map(
          (t) =>
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
