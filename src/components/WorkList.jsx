/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react";
import WorkItem from "./WorkItem";

class WorkList extends React.Component {
  constructor() {
    super();
    this.state = {
      category: "graphics",
    };
  }

  render() {
    const { items } = this.props;
    const { category } = this.state;
    const categories = items.reduce(
      (output, item) => {
        item.tags.forEach((tag) => {
          output[tag] = true;
        });
        return output;
      },
      { all: true }
    );

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

    return (
      <div>
        <p className="work-list">
          <b>Categories: </b>
          {categoryLinks}
        </p>
        <div className="works">
          {items
            .filter(
              (item) =>
                category === "all" ? true : item.tags.indexOf(category) !== -1
            )
            .map((item) => (
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
