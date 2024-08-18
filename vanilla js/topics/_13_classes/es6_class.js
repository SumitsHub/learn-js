// ES6 classes
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title}`;
  }

  // static method
  static myStaticFunc() {
    return "Static Method";
  }
}

// Instantiate object
const book1 = new Book("Book One", "John Doe", "2013");

console.log(book1);
// console.log(book1.getSummary());

// console.log(book1.myStaticFunc()); // gives Error
// console.log(Book.myStaticFunc());

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

const mag1 = new Magazine("Mag One", "John Doe", 2021, "Jan");

console.log(mag1);
