## JavaScript Code Execution Phases

In JavaScript, the concept of "compile time" doesn't apply in the same way it does in languages like C++ or Java, since JavaScript is an interpreted language. However, JavaScript does have an execution phase and a hoisting mechanism that influences how function definitions and variables are handled.

JavaScript engines go through two main phases: parsing and execution.

1. Parsing (Compilation Phase)
During this phase, JavaScript code is read by the JavaScript engine and turned into an Abstract Syntax Tree (AST). The engine processes the entire code to understand its structure, including the function definitions. However, in this phase, the engine also performs hoisting, which is where function and variable declarations are moved to the top of their scope (or to the top of the function in case of function declarations).

#### Function Declarations vs. Function Expressions
- Function Declarations: A function declaration is fully hoisted to the top of its scope, meaning the JavaScript engine knows about the function’s definition before the code is executed. It can be called before its declaration in the code.
```js
sayHello(); // Works because of hoisting

function sayHello() {
  console.log('Hello!');
}
```
What happens: During the hoisting phase, the function sayHello() is moved to the top of its scope, and its definition is available throughout the entire scope.

- Function Expressions: A function expression, on the other hand, is not hoisted in the same way. If you define a function as part of an assignment, the function is not available until the code reaches that line.
```js
sayHello(); // TypeError: sayHello is not a function

var sayHello = function() {
  console.log('Hello!');
};
```
What happens: In this case, the variable sayHello is hoisted (but not its function definition). The function is only assigned to sayHello at runtime, so calling sayHello() before that will lead to an error, as sayHello is undefined initially.

2. Execution (Runtime Phase)
Once the parsing phase is complete, JavaScript enters the execution phase, where it begins to run the code. At this point:

The JavaScript engine starts executing the code line by line.
If there are any function declarations, those are already available to be called due to hoisting.
If a function is defined using a function expression, it won't be available until the execution reaches that specific line where the function is assigned.

Example: Function Declaration Hoisting
```js
console.log(foo());  // Outputs: 'Hello, world!'

function foo() {
  return 'Hello, world!';
}
```
The function foo() is hoisted, so it’s available even before the point where it is defined in the code.

Example: Function Expression (No Hoisting)
```js
console.log(foo());  // TypeError: foo is not a function

var foo = function() {
  return 'Hello, world!';
};

```
In this case, foo() is not available before its assignment because function expressions are not hoisted in the same way.


### Hoisting Mechanism for Functions
Function Declarations: The function definition is hoisted and available at the top of the scope.

Function Expressions: Only the variable declaration (like var foo) is hoisted, but the function definition (like function() {}) is not assigned until the execution reaches that line.
