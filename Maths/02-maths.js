// Math -> Object
// Provide maths OPeration
console.log(Math);

// abs() -> absolute()
console.log(Math.abs(-4)); // -ve value to +ve

// round() -> roundOf
console.log(Math.round(4.6)); // 5

// ceil() -> top
console.log(Math.ceil(4.9)); // 5

// floor() -> down
console.log(Math.floor(3.45)); // 3

// min() -> min of numbers
console.log(Math.min(2,3,4)); // 2

// max() -> max of two numbers
console.log(Math.max(1,3)); // 3

// RANDOM()**
console.log(Math.random());

// for one digit 1 -> 9
// *IMP*
console.log(Math.floor(Math.random()*10) + 1);

// For Specific Range - RANDOM NUMBER FORMULA
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));

