const assert = require('assert');
const recursion = require('../src/recursion');

describe('recursion', () => {
  it('should return [[100], [90, 120], [70, 99, 110, 130]]', () => {
    const tree = {
      value: 100,
      left: {
        value: 90,
        left: {
          value: 70,
        },
        right: {
          value: 99,
        },
      },
      right: {
        value: 120,
        left: {
          value: 110,
        },
        right: {
          value: 130,
        },
      },
    };
    const result = recursion(tree);
    assert.deepStrictEqual(result, [[100], [90, 120], [70, 99, 110, 130]]);
    });
  it('should return [[50], [40, 60], [30, 45, 55, 75]]', () => {
    const tree = {
      value: 50,
      left: {
        value: 40,
        left: {
          value: 30,
        },
        right: {
          value: 45,
        }
      },
      right: {
        value: 60,
        left: {
          value: 55
        },
        right: {
          value: 75
        }
      }
    };
    const result = recursion(tree);
    assert.deepStrictEqual(result, [[50], [40, 60], [30, 45, 55, 75]]);
  });
});