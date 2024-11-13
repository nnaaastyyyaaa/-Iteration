'use strict';
const peoples = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};
const ages = (persons) => {
  const result = {};
  for (const inf in persons) {
    const person = persons[inf];
    const age = person.died - person.born;
    result[inf] = age;
  }
  return result;
};
console.log(ages(peoples));

module.exports = { ages };
