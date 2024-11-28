function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          completed++;
          // check if all promise resolved
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(error => reject(error)); // reject if any promise rejected
    });
  });
}

// Usage Example
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

customPromiseAll([p1, p2, p3])
  .then(console.log) // Output: [1, 2, 3]
  .catch(console.error);
