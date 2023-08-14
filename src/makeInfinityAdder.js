'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(arg) {
    if (arg !== undefined) {
      sum += arg;

      return adder;
    } else {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
