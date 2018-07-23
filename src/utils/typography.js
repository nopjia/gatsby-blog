import Typography from "typography";
import theme from "./typography-theme";

const typography = new Typography(theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles();
}

export default typography;
export const { rhythm, scale } = typography;
