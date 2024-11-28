function deepClone(obj) {
  if (typeof obj !== "object" || obj === null) return obj;

  let clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    clone[key] = deepClone(obj[key]);
  }

  return clone;
}

const originalObject = {
  a: 1,
  b: { c: 2, d: [3, 4] },
  e: [5, 6],
};

const clonedObject = deepClone(originalObject);

// Modifying the cloned object won't affect the original
clonedObject.b.c = 10;
clonedObject.e.push(7);

console.log(originalObject); // Output: { a: 1, b: { c: 2, d: [3, 4] }, e: [5, 6] }
console.log(clonedObject); // Output: { a: 1, b: { c: 10, d: [3, 4] }, e: [5, 6, 7] }
