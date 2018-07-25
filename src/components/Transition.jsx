import React from "react";
import { CSSTransition } from "react-transition-group";
import { historyExitingEventType, duration } from "../../gatsby-browser";
import "./styles/transition.scss";

class Transition extends React.Component {
  constructor(props) {
    super(props);
    this.state = { exiting: false };
    this.listenerHandler = this.listenerHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener(historyExitingEventType, this.listenerHandler);
  }

  componentWillUnmount() {
    window.removeEventListener(historyExitingEventType, this.listenerHandler);
  }

  static getDerivedStateFromProps({ exiting }) {
    if (exiting) {
      return { exiting: false };
    }
    return null;
  }

  listenerHandler(event) {
    this.setState({ exiting: true });
  }

  render() {
    const transitionProps = {
      timeout: duration,
      appear: true,
      in: !this.state.exiting,
      classNames: "transition",
    };

    return (
      <CSSTransition {...transitionProps}>
        <div className="transition">{this.props.children}</div>
      </CSSTransition>
    );
  }
}

export default Transition;
