// stack
// Heap

// stack ->  primitive
// heap -> non primitive

let uTubeName = 'mayank2007';
let anotherName = uTubeName; // it will get the copy
anotherName = 'chaiaurCode'; 

console.log(uTubeName);
console.log(anotherName);

let userOne = { // this is object
    name: 'xyz',
    age: 18
};

let userTwo = userOne; // refers to same reference
// copy of object will not pass
// when change happens both object face changes

userTwo.age = 20;

console.log(userOne.age); // 20
console.log(userTwo.age); // 20

// stack data -> copy
// heap data -> ref


// <-- Notes ->
// STACK vs HEAP MEMORY

// 1. Stack Memory
// - Stores primitive data types.
// - Variables get a separate copy of the value.
// - Changing the copied variable does not affect the original.

// 2. Heap Memory
// - Stores non-primitive data (objects, arrays, functions).
// - Variables store references to objects in heap memory.
// - Assigning an object to another variable copies the reference, not the object.
// - Changes through one reference affect the same object.

// KEY DIFFERENCE:
// Stack -> Copy of value
// Heap  -> Reference to memory location
