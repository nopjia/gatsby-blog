import React from "react";
import CanvasBackground from "../components/CanvasBackground";
import Transition from "../components/Transition";
import "normalize.css";
import "../components/styles/global.scss";

export default ({ children, location }) => (
  <div>
    <CanvasBackground />
    <Transition location={location}>{children}</Transition>
  </div>
);
