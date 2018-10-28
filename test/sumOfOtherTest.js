const assert = require('assert');
const sumOfOther = require('../src/sumOfOther');

describe('sumOfOther', () => {
  it('should return [8, 7, 6, 9]', () => {
    const result = sumOfOther([2, 3, 4, 1]);
    assert.deepStrictEqual(result, [8, 7, 6, 9]);
  });
  it('should return [9, 8, 7, 6]', () => {
    const result = sumOfOther([1, 2, 3, 4]);
    assert.deepStrictEqual(result, [9, 8, 7, 6]);
  });
});
