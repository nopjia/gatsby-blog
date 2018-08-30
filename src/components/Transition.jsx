import React from "react";
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group";
import "./styles/transition.scss";

const TIMEOUT = 500;

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
      // transition: `all ${TIMEOUT}ms ease-out`,
      transition: `opacity ${TIMEOUT}ms ease-out, margin-left ${TIMEOUT}ms ease-out, margin-right ${TIMEOUT}ms ease-out`,
    },
    exiting: {
      opacity: 0,
      marginLeft: isBackward ? "50vw" : "-50vw",
      marginRight: isBackward ? "-50vw" : "50vw",
      // transition: `all ${TIMEOUT}ms ease-in`,
      transition: `opacity ${TIMEOUT}ms ease-in, margin-left ${TIMEOUT}ms ease-in, margin-right ${TIMEOUT}ms ease-in`,
    },
  };
  return styles[status];
};

// NOTE: explanation
// we're remembering the previous 2 paths visited
// we're pushing current path on "onEntered"
// then during ReactTransition status update,
// we check if "next going to path" is the same as previous path
// if so, then we request the "backward" animation

class Transition extends React.Component {
  constructor(props) {
    super(props);
    this.prevPath1 = props.location.pathname;
    this.prevPath2 = "";
  }

  pushPrevPath(pathname) {
    this.prevPath2 = this.prevPath1;
    this.prevPath1 = pathname;
  }

  render() {
    const { location, children } = this.props;

    // NOTE: wtf this outside/inside pathnames
    // did this by observation and trial and error
    // I haven't wrapped my head around it...
    const outsidePathname = location.pathname;

    return (
      <TransitionGroup>
        <ReactTransition
          key={outsidePathname}
          timeout={{
            enter: TIMEOUT,
            exit: TIMEOUT,
          }}
          onEntered={() => this.pushPrevPath(outsidePathname)}
          onExit={() => window.CANVAS_BACKGROUND.triggerTransition(TIMEOUT * 2)}
        >
          {(status) => {
            const { location: insideLocation } = this.props;
            const insidePathname = insideLocation.pathname;
            const isBackward = this.prevPath2 === insidePathname;

            // again, this is hack from observation
            if (insidePathname !== this.prevPath1)
              window.CANVAS_BACKGROUND._transitionIsBackward = isBackward;

            // I still don't understand what's going on here...
            console.log(
              `page:${outsidePathname}`,
              `status:${status}`,
              `history:${this.prevPath2} > ${
                this.prevPath1
              } > ${insidePathname},`
            );

            return (
              <div
                style={{
                  ...getTransitionStyle(status, isBackward),
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
