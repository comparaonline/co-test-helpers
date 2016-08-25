const sinon = require('sinon');

global.sinon = sinon;
global.fakeTime = (options, fn) => {
  if (fn === undefined) {
    fn = options;
    options = undefined;
  }
  const clock = sinon.useFakeTimers(options);
  const callback = next => {
    clock.restore();
    if (next instanceof Function) next();
  };
  if (fn.length === 0) {
    const result = fn();
    callback();
    return result;
  }
  return fn(callback, clock);
};
