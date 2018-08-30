/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react";
import WorkItem from "./WorkItem";

const HIDDEN_CATEGORIES = ["featured", "hidden"];

class WorkList extends React.Component {
  constructor() {
    super();
    this.state = {
      category: "graphics",
    };
  }

  render() {
    let { items } = this.props;

    // build categories
    const { category } = this.state;
    const categories = items.reduce(
      (acc, item) => {
        item.tags.forEach((tag) => {
          acc[tag] = true;
        });
        return acc;
      },
      { all: true }
    );
    HIDDEN_CATEGORIES.forEach((c) => {
      delete categories[c];
    });

    // build category links
    const categoryLinks = [];
    Object.keys(categories).forEach((c, i) => {
      if (i > 0) {
        categoryLinks.push(", ");
      }
      if (c === category) {
        categoryLinks.push(
          <span key={c} className="category selected">
            {c}
          </span>
        );
      } else {
        categoryLinks.push(
          <span
            key={c}
            className="category"
            onClick={() => {
              this.setState((prevState) => ({
                category: c,
              }));
            }}
          >
            {c}
          </span>
        );
      }
    });

    // filter items
    items = items.filter((item) => !item.tags.includes("hidden"));
    items = items.filter(
      (item) => (category === "all" ? true : item.tags.includes(category))
    );

    return (
      <div>
        <p className="work-list">
          <b>Categories: </b>
          {categoryLinks}
        </p>
        <div className="works">
          {items.map((item) => (
            <WorkItem
              key={item.title}
              title={item.title}
              slug={item.fields.slug}
              image={item.images[0]}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default WorkList;
