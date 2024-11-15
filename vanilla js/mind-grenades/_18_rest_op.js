// Rest Operator

function myFunc(...args) {
  console.log(args); // [ 'hey', [ 232323, 2434, 2423 ], '2423 {}' ]
  console.log(arguments); // [Arguments] { '0': 'hey', '1': [ 232323, 2434, 2423 ], '2': '2423 {}' }

  console.log(typeof args); // object
  console.log(typeof args); // object

  console.log(Array.isArray(args)); // true
  console.log(Array.isArray(arguments)); // false
}

myFunc("hey", [232323, 2434, 2423], "2423 {}");

console.log(typeof myFunc); // function


//* rest operator with empty arg
function func(...args) {
  console.log(args);
}

func(); // [] - an empty array