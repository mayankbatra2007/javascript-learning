// >, <, <=, >=, ==, != 

console.log("2" > 1); // -> 2 > 1 -> true
console.log("02" > 1); // -> 2 > 1 -> true
// this was solved in TypeScript

// do not depend on these
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
// same with undefined -> give always false

// Reason ->
// == equality check and comparison >, <, >=, <= work differenlty
// comparisons convert null to a number , treating it as 0
// i.o. -> null >= 0 and null > 0 is false


// === is strict check
console.log("2" === 2);// false
// check datatype in ===




