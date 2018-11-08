function make(...input) {
  const elems = [];
  const foo = function step(...args) {
    if (!(args[args.length - 1] instanceof Function)) {
      elems.push(...args);
      return step;
    }
    elems.push(...args);
    return elems.reduce(elems.pop());
  };
  return foo(...input);
}

module.exports = make;
