'use strict';

/*
 * 1. Write a function that returns an error if called with invalid arguments
 *
 * Fill in the body of the function `combinedLength`, which should return
 * the combined length of two arrays if it receives correct arguments, and
 * otherwise should return an appropriate error.
 */

/**
 * Calculates the combined length of two arrays
 * @param   {Array} a First array
 * @param   {Array} b Second array
 * @returns {Number}  Combined length of a and b
 */
const combinedLength = (a, b) => {
  const isArrays = Array.isArray(a) && Array.isArray(b);

  if (!isArrays) {
    return new TypeError('');
  }

  const totalLength = a.length + b.length;
  return totalLength;

  // CODE HERE
};

/*
 * 2. Write a function that sums the numbers in an array and returns an error
 *    if called with invalid arguments
 *
 * Fill in the body of the function `sumArray`, which should return
 * the sum of all the elements in the input array. If it receives incorrect
 * arguments, it should return an error.
 *
 * Note that all elements of the input array must be numbers.
 */

/**
 * Sums numbers in an array
 * @param   {Array} xs list of numbers
 * @returns {Number}   sum of list
//  */
// const sumArray = (xs) => {
//   if (Array.isArray(xs)) {
//     let sum = 0;
//     for (let num of xs) {
//       if (typeof num === 'number' && !isNaN(num)) {
//         sum += num;
//       } else {
//         return new TypeError();
//       }
//     }
//     return sum;
//   } else {
//     return new TypeError();
//   }
// };

const sumArray = (xs) => {
  if (!Array.isArray(xs)) {
    return new TypeError();
  }

  const isNotAllNumbers = xs.some((num) => isNaN(num) || typeof num !== 'number');

  if (isNotAllNumbers) {
    return new TypeError();
  } else {
    return xs.reduce((acc, x) => acc + x, 0);
  }
};

/*
 * 3. Write a function that handles errors returned by (1) and (2)
 *
 * Fill in the body of the function `combineAndPrint`, which should find the
 * combined length of two arrays and the total sum of all their elements.
 * If an error occurs, the function should instead print a useful message
 * explaining what went wrong.
 */

/**
 * Returns a string of the format
 *   "Combined length: L; Combined sum of elements: S"
 * Where L is the combined length of the two arrays and S is the sum of the elements of the array
 *
 * The function should use `combinedLength`. In the case of invalid inputs, the
 * function should return the string
 *   "Invalid arguments: both arguments must be arrays"
 * @param   {Array}  a First array
 * @param   {Array}  b Second array
 * @returns {String}   Message about the combined arrays
 */
const combineAndPrint = (a, b) => {
  const areBothArrays = Array.isArray(a) && Array.isArray(b);

  if (!areBothArrays) {
    return new TypeError();
  }

  const isAllNumbersIn_a = a.every((num) => !isNaN(num) || typeof num === 'number');
  const isAllNumbersIn_b = b.every((num) => !isNaN(num) || typeof num === 'number');
  if (!isAllNumbersIn_a || !isAllNumbersIn_b) {
    return new TypeError();
  }

  const combinedLength = a.length + b.length;
  const sumArray_a = a.reduce((acc, curr) => acc + curr, 0);
  const sumArray_b = b.reduce((acc, curr) => acc + curr, 0);
  const totalSum = sumArray_a + sumArray_b;

  return `Combined length: ${combinedLength}; Combined sum of elements: ${totalSum}`;
};

/*
 * **Stretch goal -- Harder -- Optional**
 *
 * 4. Write a function that wraps another function in an error check
 *
 * Fill in the body of the function `wrapErrorCheck`, which takes a function `fn1`
 * as an argument and returns another function `fn2` which wraps the first in
 * a check for any returned errors.
 *
 * `fn2` should behave exactly like `fn1` except in the case where `fn1` returns an
 * error, in which case `fn2` should simply return `undefined`
 */

/**
 * Wraps given function in error check
 * @param  {Function} fn Function to wrap
 * @return {Function}    Wrapped function
 */
const wrapErrorCheck =
  (fn) =>
  (...args) => {};

module.exports = {
  combinedLength,
  sumArray,
  combineAndPrint,
  wrapErrorCheck,
};
