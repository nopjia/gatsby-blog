import React from "react";
import { Transition as ReactTransition } from "react-transition-group";
import { historyExitingEventType, duration } from "../../gatsby-browser";

const getTransitionStyles = (timeout) => ({
  entering: {
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 0,
  },
});

const getTransitionStyle = (timeout, status) => {
  return getTransitionStyles(timeout)[status];
};

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
      timeout: {
        enter: 0,
        exit: duration,
      },
      appear: true,
      in: !this.state.exiting,
    };

    return (
      <ReactTransition {...transitionProps}>
        {(status) => (
          <div
            style={{
              ...getTransitionStyle(duration, status),
            }}
          >
            {this.props.children}
          </div>
        )}
      </ReactTransition>
    );
  }
}

export default Transition;
