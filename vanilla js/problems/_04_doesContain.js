//** write a function to check whether a value exists in a nested object or not */

const doesContains = (obj, value) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      if (doesContains(obj[key], value)) {
        return true;
      }
    } else if (obj[key] === value) {
      return true;
    }
  }
  return false;
};

//* Test -

var nestedObject = {
  data: {
    info: {
      moreData: {
        moreInfo: {
          number: {
            myNumber: 36,
            myString: "test",
          },
        },
        moreInfo1: {
          number: {
            myNumber: 54,
            myString: "test123",
          },
        },
      },
    },
  },
};

console.log("returned value 1: ", doesContains(nestedObject, 36)); // true
console.log("returned value 2: ", doesContains(nestedObject, "test1")); // false
console.log("returned value 3: ", doesContains(nestedObject, "test")); // true
console.log("returned value 4: ", doesContains(nestedObject, 54)); // true
