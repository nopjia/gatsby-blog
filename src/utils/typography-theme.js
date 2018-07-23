const color1 = "#000";
const color2 = "#aaa";
const color25 = "#ccc";
const color3 = "#880000";
const colorbg = "#fff";
const googleFonts = [
  {
    name: "Vollkorn",
    styles: ["400"],
  },
];
const fontFamily = ["Vollkorn", "Georgia", "Times New Roman", "Times", "serif"];

const overrideStyles = ({ rhythm }) => ({
  "h2, h3, h4, h5, h6": {
    color: color2,
  },
  a: {
    color: color1,
  },
  "a:active, a:hover": {
    color: color3,
  },
  "h1 > a, h2 > a, h3 > a, h4 > a, h5 > a, h6 > a": {
    textDecoration: "none",
  },
  blockquote: {
    borderLeft: `1px solid ${color25}`,
    color: color2,
    marginTop: 0,
    marginRight: 0,
    marginLeft: 0,
    paddingLeft: `calc(${rhythm(1 / 2)})`,
  },
  ".date": {
    color: color2,
  },
});

export default {
  title: "iamnop",
  baseFontSize: "14px",
  baseLineHeight: 1.5,
  scaleRatio: 2.5,
  googleFonts,
  headerFontFamily: fontFamily,
  bodyFontFamily: fontFamily,
  headerColor: color1,
  bodyColor: color1,
  headerWeight: "normal",
  bodyWeight: "normal",
  boldWeight: 500,
  overrideStyles,
};
