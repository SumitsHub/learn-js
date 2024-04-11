/**
 * Question:
 *
 * define x, such that following if condition will be true
 * if (x == 1 && x == 2 && x == 3) {
 *     console.log("You got it");
 * }
 *
 */

// Solution -

let x = {
  flag: 1,

  toString() {
    return this.flag++;
  },
};

if (x == 1 && x == 2 && x == 3) {
  console.log("You got it");
} else {
  console.log("Nope, try again");
}

// Concept -
/**
 * when used == for comparison,
 * non primitive converted to primitive
 * object uses toString() method for conversion
 *
 */


/**
 * Question: Guess the output of below code snippet
 * 
 */

let obj = {
  '1': 'a',
  1: 'b',
  [1]: 'c'
}

console.log(obj[1]) // Output: c