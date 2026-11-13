addone(1); // can execute
function addone(){
    return num + 1;
}
addone(5);

addTwo(4); // not executing due to hoisting bcz this was in expression
const addTwo = function(num){
    return num + 2;
}
// addTwo is expression
addTwo(2);