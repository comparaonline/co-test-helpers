const sinon = require('sinon');

global.sinon = sinon;
global.fakeTime = (options, fn) => {
  if (fn === undefined) {
    fn = options;
    options = undefined;
  }
  const clock = sinon.useFakeTimers(options);
  const restore = next => {
    clock.restore();
    if (next instanceof Function) next();
  };
  if (fn.length === 2) {
    return fn(restore, clock);
  }
  const result = (fn.length === 0 ? fn() : fn(clock));
  restore();
  return result;
};
