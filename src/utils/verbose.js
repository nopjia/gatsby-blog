/* eslint-disable no-console */

const initVerbose = function initVerbose(enable, ...argsInit) {
  return function verbose(...args) {
    if (enable) {
      console.log(...argsInit, ...args);
    }
  };
};

export default initVerbose;
