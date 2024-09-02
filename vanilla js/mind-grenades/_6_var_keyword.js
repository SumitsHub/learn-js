// var keyword

for (var i = 0; i < 5; ) {
  i++;
}

console.log(i); // 5

(function () {
  var j = 10;
  console.log(j); // 10
})();

// console.log(j); // Reference error -> functions has it's own execution stack

// for loop -> not using any keyword to declare -> by default var is used
for (k = 0; k < 2; k++) {
  console.log(k);
}

console.log(k); // 2

// variables and functions - this is simple, we can use function before declaration 
var totalCount = 5;
test();

function test() {
    var noCount;
    noCount = totalCount;
    console.log(noCount); // 5
    console.log(totalCount); // 5
}
console.log(totalCount); // 5
// console.log(noCount); // ERROR
