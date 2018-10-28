function make(input) {
  const elems = [];
  const foo = function step(...args) {
    if (!(args[0] instanceof Function)) {
      elems.push(...args);
      return step;
    }
    return elems.reduce(...args);
  };
  return foo(input);
}

module.exports = make;
