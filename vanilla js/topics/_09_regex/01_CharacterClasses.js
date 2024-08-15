// [] - Range of characters
console.log(/[abc]/.test('someabc')); // true
console.log(/[a-b]/.test('Someabc')); // true
console.log(/[a-b]/.test('SomeAbc')); // true

console.log(/[aeiou]/.test('SomeAbc')); // true
console.log(/[aeiou]/.test('xyzty')); // false

// [^] - A negated or complemented character class - That is, it matches anything that is not enclosed in the square brackets.
console.log(/[^aeiou]/.test('SomeAbc')); // true
console.log(/[^abc]/.test('someabc')); // true
console.log(/[^a-d]/.test('baddab')); // false

// . (dot)
console.log(/.y/.test('many')); // true
console.log(/.y/.test('yes make my day')); // true
console.log(/.y/.test('yes make days')); // true
console.log(/.y/.test('yes')); // false
console.log(/.y/.test('m\nyour')); // false

// \d - matches any digit similar to [0-9]
console.log(/\d/.test('890abhi')); // true
console.log(/\d/.test('absckdo')); // false

// \D - matches not digit - similar to [^0-9]
console.log(/\D/.test('B234')); // true for 'B'
console.log(/\D/.test('78899')); // false

// \w - matches any alphanumeric character - similar to [A-Za-z-0-9_]
console.log(/\w/.test('Something23')); // true - any word
console.log(/\w/.test('$()][')); // false - non alphanumeric latin alphabet
console.log(/\w/.test('-')); // false - hyphen
console.log(/\w/.test('_')); // true - underscore

console.log(/\w/.test('some-word')); // true

// \W
console.log(/\W/.test('Something23')); // false - any word
console.log(/\W/.test('$()][')); // true - non alphanumeric latin alphabet
console.log(/\W/.test('-')); // true - hyphen
console.log(/\W/.test('_')); // false - underscore

console.log(/\W/.test('some-word')); // true

// \s
console.log(/\s/.test('something special')); // true
console.log('Something Very Special '.match(/\s/)); // first space found at index = 9

// \S
console.log('Something Very Special '.match(/\S\w*/)); // Something, index = 9

// x|y

console.log('red apple'.match(/red|green/)); // red index = 0
console.log('green apple'.match(/red|green/)); // green index = 0
