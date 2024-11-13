'use strict';

const sum = (...args) => {
  let s = 0;
  for (const arg of args) {
    s += arg;
  }
  return s;
};
console.log(sum(1, 2, 3));
module.exports = { sum };
