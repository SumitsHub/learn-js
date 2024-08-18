//? Constructor function
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year

//     this.getSummary = function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     }
// }

// Instantiate an Object
// const book1 = new Book('Book one', 'John doe', 2012);
// const book2 = new Book('Book two', 'Jane Doe', 2020);

// console.log(book1.getSummary());

//? Prototype

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// adding method to prototype
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Book.prototype.getYear = function() {
//     return `${this.year}`
// }

// Book.prototype.revise = function(newYear) {
//     this.year = newYear;
//     this.revised = true;
// }

// Instantiate an Object
// const book1 = new Book('Book one', 'John doe', 2012);
// const book2 = new Book('Book two', 'Jane Doe', 2020);

// console.log(book1);
// console.log(book1.getSummary());
// console.log(book2.getYear());
// book2.revise(2021)
// console.log(book2.revised);

//? Inheritance - Prototypal Inheritance
// Magazine constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);

  this.month = month;
}

// Inherit prototype
Magazine.prototype = Object.create(Book.prototype);

// Use Magazine constructor
Magazine.prototype.constructor = Magazine;

// Instantiate Magazine
const mag1 = new Magazine("Mag one", "John Doe", "2019", "Jan");

console.log(mag1);

//? Object create
let obj = {
  name: "Sumit",
  age: 23,
};

// obj.prototype.getName = function () {
//   return this.name;
// };
console.log(obj);

const bookProtos = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getYear: function () {
    return this.year;
  },
};

// create object
// const book1 = Object.create(bookProtos);
// book1.title = 'Book one'
// book1.author = 'John Doe'
// book1.year = 2020

const book1 = Object.create(bookProtos, {
  title: { value: "Book One" },
  author: { value: "John Doe" },
  year: { value: "2020" },
});

console.log(book1);
console.log(book1.getSummary());
