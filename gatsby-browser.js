/* globals window CustomEvent */
import createHistory from "history/createBrowserHistory";

const duration = 250;
const historyExitingEventType = `history:exiting`;

const getUserConfirmation = (pathname, callback) => {
  const event = new CustomEvent(historyExitingEventType, { detail: { pathname } });
  window.dispatchEvent(event);
  setTimeout(() => {
    callback(true);
  }, duration);
};

let history;
if (typeof document !== "undefined") {
  history = createHistory({ getUserConfirmation });
  // block must return a string to conform
  history.block((location, action) => location.pathname);
}

export let replaceHistory = () => history;

export { historyExitingEventType, duration };
