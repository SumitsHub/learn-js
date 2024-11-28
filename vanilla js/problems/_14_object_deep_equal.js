function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true; // Same reference or primitive value

  if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
    return false; // Not both are objects
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false; // Different number of keys
  }

  return keys1.every(key => deepEqual(obj1[key], obj2[key]));
}

console.log(deepEqual({ a: 1, b: { c: 3 } }, { a: 1, b: { c: 3 } })); // true
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 })); // false
