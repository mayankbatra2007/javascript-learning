// Immediatly Invoked Function Expressions
// An Immediately Invoked Function Expression 
// (IIFE) is a function in JavaScript 
// that is defined and executed immediately,
//  without needing to call it separately.

// Why Use IIFE?
// 1. Avoid Global Scope Pollution: Variables declared inside an IIFE cannot be accessed outside it.
// 2. Data Privacy: Keeps variables private.
// 3. Immediate Execution: Executes code only once when encountered.
// 4. Encapsulation: Groups related logic together.


function chai(){
    console.log("DB Connected");
}
chai();

(function chai(){
    console.log("DB Connected");
})();
// must end IIFE with semicolon
