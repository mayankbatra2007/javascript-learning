let value = 3;
let newValue = -value; // -3

let str1 = "hello";
let str2 = " mayank";

let str3 = str1 + str2;
console.log(str3);

console.log(1 + "2"); // 12
console.log("1"+ 2); // 12

// do not depend on these
console.log(1 + "2" + 2); // 122
console.log("1"+ 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log(true); // true
console.log(+true); // 1 -> do not do these things
// console.log(true+); // error

//  Assignment happens from RIGHT TO LEFT.
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

// Pre fix / Post fix OP
let gameCounter = 100;
gameCounter++; // use then inc 
console.log(gameCounter);


// IMPORTANT:
// Prefix: ++a → Increment first, then use.
// Postfix: a++ → Use first, then increment.
// When used alone, both give the same final value.
