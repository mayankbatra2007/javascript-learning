// 01 - JS Execution Context
// Environment in which JavaScript code is executed.

// Types of Execution Context:
// 1. Global Execution Context (GEC) -> Browser: window object
//    Node.js: global object
// 2. Function Execution Context (FEC) -> Created whenever a function is called.
// 3. Eval Execution Context -> Created when code runs inside eval().

// 02 - Two Phases of Execution Context
// 1. Memory Creation Phase (Creation Phase)
//    - Variables are allocated memory.
//    - let/const are uninitialized (Temporal Dead Zone).
//    - var gets undefined.
//    - Functions store their complete definition.

// 2. Execution Phase
//    - Code executes line by line.
//    - Variables get their actual values.
//    - Function calls create a new Function Execution Context.

// 03 - Example

let val1 = 10;
let val2 = 20;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result = addNum(val1, val2);

// 04 - Global Execution Context
// Memory Phase:
// val1 -> undefined (var only; let is uninitialized)
// val2 -> undefined (var only; let is uninitialized)
// addNum -> Function Definition
// result -> undefined (var only; let is uninitialized)

// Execution Phase:
// val1 -> 10
// val2 -> 20
// result -> 30

// 05 - Function Execution Context
// Created whenever addNum() is called.

// Memory Phase:
// num1 -> undefined
// num2 -> undefined
// total -> undefined

// Execution Phase:
// num1 -> 10
// num2 -> 20
// total -> 30
// return 30;

// 06 - Call Stack
// - Manages function execution using LIFO.
// - Function called -> pushed onto stack.
// - Function completed -> popped from stack.
// - Global Execution Context stays at the bottom.