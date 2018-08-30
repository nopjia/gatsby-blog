import React from "react";
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group";
import "./styles/transition.scss";

const DURATION = 500;

const getTransitionStyle = (status, isBackward) => {
  const styles = {
    entering: {
      position: "absolute",
      opacity: 0,
      marginLeft: isBackward ? "-50vw" : "50vw",
      marginRight: isBackward ? "50vw" : "-50vw",
    },
    entered: {
      opacity: 1,
      marginLeft: 0,
      marginRight: 0,
      // transition: `all ${DURATION}ms ease-out`,
      transition: `opacity ${DURATION}ms ease-out, margin-left ${DURATION}ms ease-out, margin-right ${DURATION}ms ease-out`,
    },
    exiting: {
      opacity: 0,
      marginLeft: isBackward ? "50vw" : "-50vw",
      marginRight: isBackward ? "-50vw" : "50vw",
      // transition: `all ${DURATION}ms ease-in`,
      transition: `opacity ${DURATION}ms ease-in, margin-left ${DURATION}ms ease-in, margin-right ${DURATION}ms ease-in`,
    },
  };
  return styles[status];
};

const triggerTransition = () => {
  window.CANVAS_BACKGROUND.triggerTransition(DURATION * 2);
};

class Transition extends React.Component {
  constructor(props) {
    super(props);

    this.isBackward = false;
    this.timeoutId = undefined;

    // HACK: set CANVAS_BACKGROUND directly
    this.startBackward = () => {
      this.isBackward = true;
      window.CANVAS_BACKGROUND._transitionIsBackward = true;

      // in case user clicks back quicker than DURATION
      // we need to cancel the previous unresolved timeout
      if (this.timeoutId) clearTimeout(this.timeoutId);

      // then, sets timeout to reset isBackward state
      this.timeoutId = setTimeout(() => {
        window.CANVAS_BACKGROUND._transitionIsBackward = false;
      }, DURATION * 2);
    };

    this.endBackward = () => {
      this.isBackward = false;
    };

    if (window.history && window.history.pushState) {
      window.addEventListener("popstate", this.startBackward);
    }
  }

  render() {
    const { location, children } = this.props;

    return (
      <TransitionGroup>
        <ReactTransition
          key={location.pathname}
          timeout={{
            enter: DURATION,
            exit: DURATION,
          }}
          onExited={this.endBackward}
          onExit={triggerTransition}
        >
          {(status) => {
            console.log(
              location.pathname,
              status,
              this.isBackward ? "backward" : "foward"
            );
            return (
              <div
                style={{
                  ...getTransitionStyle(status, this.isBackward),
                }}
                className="transition"
              >
                {children}
              </div>
            );
          }}
        </ReactTransition>
      </TransitionGroup>
    );
  }
}

export default Transition;
