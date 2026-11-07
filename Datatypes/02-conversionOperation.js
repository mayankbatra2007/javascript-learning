let score = "33";

console.log(typeof score);

let valueInNumber = Number(score);

console.log(typeof valueInNumber);

// String -> Number
// "33" -> 33
// "33abc" -> NaN -> Not a Number
// null -> 0

// Boolean -> Number
// true -> 1
// false -> 0
// "" -> False
// "hitesh" -> true


// <-- Notes -->
/*
Type Conversion

-> one datatype to other datatype
-> Built in Functions

Number() -> value to Number
String() -> value into String
Boolean() -> value into Boolean

// Number Conversion:
// "33"       -> 33
// "33abc"    -> NaN
// null       -> 0
// undefined  -> NaN
// true       -> 1
// false      -> 0
// ""         -> 0

// Boolean Conversion:
// 1          -> true
// 0          -> false
// ""         -> false
// "hello"    -> true
// "0"        -> true
// null       -> false
// undefined  -> false

// NaN = Not a Number (invalid numeric result).
// typeof NaN returns "number".
*/