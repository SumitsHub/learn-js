function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

let iterator = numbers();

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: undefined, done: true} -> IMP

function* numbers2() {
  // start over again
  while (true) {
    yield 1;
    yield 2;
    yield 3;
  }
}

iterator = numbers2();

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: 1, done: false} -> IMP

// DON'T DARE TO UNCOMMENT BELOW LINES -> INFINITE LOOP, USING WHILE TRUE IN GENERATOR
// for (let value of iterator) {
//   console.log(value);
// }
