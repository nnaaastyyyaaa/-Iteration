'use strict';

const sum = (...args) => {
  let i = 0;
  let s = 0;
  do {
    if (args.length === 0) return 0;
    s += args[i];
    i++;
  } while (i < args.length);
  return s;
};
console.log(sum(1, 2, 3));
module.exports = { sum };
