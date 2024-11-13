'use strict';
const sum = (...args) => {
  let s = 0;
  let i = 0;
  while (i < args.length) {
    s += args[i];
    i++;
  }
  return s;
};
console.log(sum(1, 2, 3));

module.exports = { sum };
