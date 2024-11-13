'use strict';
const sum = (...args) => args.reduce((i, arg) => i + arg, 0);
console.log(sum(1, 2, 3));

module.exports = { sum };
