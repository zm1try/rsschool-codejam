function sumOfOther(inputArr) {
  return inputArr.map(item => inputArr.reduce((a, b) => a + b) - item);
}
module.exports = sumOfOther;
