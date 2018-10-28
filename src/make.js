function make(input) {
    const elems = [];
    const foo = function step(value) {
        if(!(value instanceof Function)) {
            elems.push(...arguments);
            return step;
        }
        else return elems.reduce(value);
    };
    return foo(input);
}

module.exports = make;