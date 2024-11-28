//* A custom iterator allows you to define a specific iteration behavior for objects.

const myIterable = {
  data: [1, 2, 3],
  [Symbol.iterator]() {
    let index = 0;
    const data = this.data;

    return {
      next() {
        if (index < data.length) {
          return { value: data[index++] * 10, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

for (const value of myIterable) {
  console.log(value); // Output: 10, 20, 30
}
