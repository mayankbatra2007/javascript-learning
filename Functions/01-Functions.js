// Functions -> reusable block of code

function sayMyName(){
    console.log("mayank");
}
sayMyName(); // call
sayMyName; // this is only ref of function

function addTwoNumbers(number1, number2){ // these are params
    console.log(number1 + number2);
}
addTwoNumbers(2,3); // 5 , these are args
addTwoNumbers(2, "3"); // 5
// Make the function Full Powerful currently this is not

function subtract(number1, number2){
    return number1 - number2;
}
let res = subtract(3,4);

function loginUserMessage(userName){
    return `${userName} just logged in`;
}
const res2 = loginUserMessage("mb");
console.log(res2);
// IMP** if we donot pass argument that is req -> return hoga undefined

// default params
function signinUserMessage(userName="mb"){
    return `${userName} just logged in`;
}
console.log(signinUserMessage()); // mb