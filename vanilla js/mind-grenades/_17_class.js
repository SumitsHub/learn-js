class Person {
  // class variables - it's same as instance variable, it's not a static variable
  noOfWins = 0;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get birthYear() {
    return new Date().getFullYear() - this.age;
  }

  set birthYear(year) {
    if (year < 0) {
      throw new Error("Year cant be negative!");
    }
    //* this.birthYear = year; // infinite loop
    this.age = new Date().getFullYear() - year;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }

  incWin() {
    this.noOfWins++;
    this.something = "Something";
  }
}

const person1 = new Person("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
console.log(person1); // { noOfWins: 0, name: 'Alice', age: 30 }
person1.incWin();
console.log(person1.noOfWins); // 1

console.log(person1); // { noOfWins: 1, name: 'Alice', age: 30, something: 'Something' }
// NOTE: property get added to class by method

const person2 = new Person("Bob", 25);
console.log(person2.age); // Output: 25
console.log(person2.noOfWins); // 0

// getter and setter
console.log(person1.birthYear); // 1994
person1.birthYear = 1990;
console.log(person1.birthYear); // 1990
