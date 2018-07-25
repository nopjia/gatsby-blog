import React from "react";
import { CSSTransition } from "react-transition-group";
import { historyEventType, duration } from "../../gatsby-browser";
import "./styles/transition.scss";

class Transition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exiting: false,
      pathname: props.location.pathname,
    };
    this.listenerHandler = this.listenerHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener(historyEventType, this.listenerHandler);
  }

  componentWillUnmount() {
    window.removeEventListener(historyEventType, this.listenerHandler);
  }

  listenerHandler(event) {
    this.setState({
      exiting: true,
      pathname: event.detail.pathname,
    });
  }

  render() {
    const { exiting, pathname } = this.state;
    const direction =
      pathname === "/" || pathname === "" ? "backward" : "forward";

    const transitionProps = {
      timeout: {
        enter: 0,
        exit: duration,
      },
      appear: true,
      in: !exiting,
      classNames: direction,
    };

    return (
      <CSSTransition {...transitionProps}>
        {(state) => {
          return <div className="transition">{this.props.children}</div>;
        }}
      </CSSTransition>
    );
  }
}

export default Transition;
