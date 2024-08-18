// In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.

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

function* generateId() {
  let id = 1;
  while (true) {
    const inc = yield id; // returns parameter passed to next()
    if (inc) {
      id += inc;
    } else {
      id++;
    }
  }
}

const id = generateId();
console.log(id.next()); // {value: 1, done: true}
console.log(id.next(5)); // {value: 6, done: true}
console.log(id.next(10)); // {value: 16, done: true} - yield returns this value passed to next()

// Generators have return method - returns the given value and finishes the generator itself
console.log(id.return(10)); // {value: 10, done: true}
