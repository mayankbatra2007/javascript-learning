let a = 10; // all globally available in this file
const b = 20;
var c = 30;

console.log(a);
console.log(b);
console.log(c);

// theyall work same why need of all three ?
// soln -> scope

if(true){ // this is scope for x
    let x = -1;
}
// console.log(x); // not defined error

// which wil print in scope
if(true){
    let a = 100;
    console.log(a); // 100 not 10
}

// {} currly braces -> scope

