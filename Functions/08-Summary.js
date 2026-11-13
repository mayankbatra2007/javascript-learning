// Function: Reusable block of code that performs a specific task.

// Function Declaration
function greet() {
    console.log("Hello");
}

// Function Call
greet();

// Parameters: Variables defined in function.
// Arguments: Actual values passed during function call.

// Return: Sends a value back from a function.
function add(a, b) {
    return a + b;
}

// Default Parameters: Used when argument is not provided.
function welcome(name = "Guest") {
    console.log("Hello " + name);
}

// Function Expression: Function stored in a variable.
const sayHi = function() {
    console.log("Hi");
};

// return ends function execution.


// FUNCTIONS WITH OBJECTS
// Objects can be passed as function arguments.
// Access object properties using dot notation.

const user = {
    name: "Rahul",
    age: 20
};
function displayUser(obj) {
    console.log(obj.name);
    console.log(obj.age);
}
displayUser(user);

// Functions can also return objects.
// Objects are passed by reference value.
// Modifying object properties inside a function
// can affect the original object.



// SCOPE IN JAVASCRIPT
// Scope: Determines where variables can be accessed.
// Global Scope:
// Variables accessible throughout the program.

let a = 10;

// Function Scope:
// Variables declared inside a function
// are accessible only inside that function.

function test() {
    let b = 20;
}

// Block Scope:
// let and const are limited to { } blocks.

{
    let x = 10;
    const y = 20;
}

// var is NOT block scoped.
// Types of Scope:
// 1. Global Scope
// 2. Function Scope
// 3. Block Scope


// SCOPE LEVEL / SCOPE CHAIN
// JavaScript searches for variables in the current scope.
// If not found, it searches in the outer scope.
// This process is called Scope Chain.
// Inner functions can access outer function variables.
// Outer functions cannot access inner function variables.
// Lexical Scope:
// Scope is determined by where functions are written,
// not where they are called
// Closures:
// Inner function remembers variables of outer function
// even after outer function has finished execution.



// THIS KEYWORD & ARROW FUNCTIONS

// THIS:
// Refers to the object associated with the function call.
// In an object method, this refers to the object.
// In a regular function, this depends on how
// the function is called.
// ARROW FUNCTION:
// Shorter syntax for writing functions.
const add = (a, b) => a + b;
// Single parameter: Parentheses are optional.
const square = n => n * n;
// Multiple statements require { } and return.
const multiply = (a, b) => {
    return a * b;
};
// Arrow functions do not have their own this.
// They inherit this from the surrounding lexical scope.
// Arrow functions cannot be used as constructors.
// Arrow functions do not have their own arguments object.