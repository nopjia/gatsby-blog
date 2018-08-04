import React from "react";
import { Link } from "gatsby";

export default ({ title, image }) => (
  <Link className="item" to={title}>
    <div className="image-wrap">
      <div className="image" style={{ backgroundImage: `url(${image})` }} />
    </div>
    <div>{title}</div>
  </Link>
);
