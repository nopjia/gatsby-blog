/* globals window CustomEvent */
/* eslint-disable import/no-extraneous-dependencies */
import createBrowserHistory from "history/createBrowserHistory";

const duration = 500;
const historyEventType = "history:exiting";

const getUserConfirmation = (pathname, callback) => {
  const event = new CustomEvent(historyEventType, {
    detail: { pathname },
  });
  window.dispatchEvent(event);
  setTimeout(() => {
    callback(true);
  }, duration);
};

let history;
if (typeof document !== "undefined") {
  history = createBrowserHistory({ getUserConfirmation });
  // block must return a string to conform
  history.block((location, action) => location.pathname);
}

export let replaceHistory = () => history; // eslint-disable-line

export { historyEventType, duration };
