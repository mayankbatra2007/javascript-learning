// # Primitive 
// 7 types
/*
String, Number, Boolean, null, 
undefined, Symbol, BigInt
*/

// # Reference
/* 
Arrays, Objects, Functions
*/

// JS -> Dynamic typed language -> No Datatype Declaration

// Symbol -> 
const id = Symbol('123');
const another_id = Symbol('123');
console.log(id === another_id); // false

// Array 
const heroes = ["ShaktiMan", "Naagro", "Doga"];
// Object
const human = {
    name: "xyz",
    age: 999
}
// Function
const myFunc = function(){
    console.log("hello");
}
// datatype of myFunc -> function

// check datatype
console.log(typeof human);
