1.Реалізуйте функцію `sum(...args)`, яка підсумовує всі свої аргументи п'ятьма
у різний спосіб:
 1. Цикл `for`
 2. Цикл `for..of`
 3. Цикл `while`
 4. Цикл `do..while`
 5. Метод `Array.prototype.reduce()`
Наприклад:
```js
const a = sum(1, 2, 3) // a === 6
const b = sum(0) // b === 0
const c = sum() // c === 0
const d = sum(1, -1, 1) // d === 1
const e = sum(10, -1, -1, -1) // e === 7
```   
2.Знайдіть максимальний елемент у двовимірному масиві
```js
const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); // 9
```
3.За допомогою циклу `for..in` перебрати об'єкт-довідник із датами народження та
смерті людей і повернути довідник із тривалістю їхнього життя. Наприклад:
```js
const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};
console.log(ages(persons));
// {
//   lenin: 54,
//   mao: 83,
//   gandhi: 79,
//   hirohito: 88,
// }
```
