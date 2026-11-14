// JS Exec Context
// {} -> Global Exec Context -> Window
// Function Exec Context
// Eval Exec Contxet

// 1. {} -> Memory Creation Phase
// 2. Exec Phase

// Eg
let val1 = 10;
let val2 = 20;
function addNum(num1, num2){
    let total = num1 + num2;
    return total;
}
let res = addNum(val1, val2);
let res2 = addNum(10, 2);

/*
1. Global Exec
2. Memory Phase
val1 -> undefined
val2 -> undefined
addNum -> defination
res1 -> undefined
res2 -> undefined
3. Exec Phase
val1 -> 10;l
val2 -> 20;
addNum -> newVariable env + Exec thread
After or when addNum fucn call
1. Memory Phase
val1 -> undefined
val2 -> undefined
total -> undefined
2. Exec Context
num1 -> 10
num2 -> 5
total -> 15
*/