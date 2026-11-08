const score = 400;
console.log(score);
 
const balance = new Number(100);
console.log(balance);

console.log(balance.toString()); // type -> String

console.log(balance.toFixed(2));
// for decimal places

const anotherNumber = 23.098;
console.log(anotherNumber.toPrecision(3));
// it is like roundOf

const hundreds = 1000000;
console.log(hundreds.toLocaleString());
// like easy reading of large number with commas


// <---Notes--->
// toString() -> number to string
// toFixed(n) -> set decimal places , n->no of decimal places
// toPrecision(n) -> set significant digits
// toLocalString() -> format with comas
