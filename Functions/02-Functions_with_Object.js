// Rest OP
function calulatePrice(...nums){
    return nums
}
console.log(calulatePrice(200, 400, 500));
// return array of all values

// pass objects to function
const user = {
    username: "hitesh",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);
handleObject({
    username: "sam",
    price: 99
});
// pass array
const newar = [200, 400, 900];
function returnSecValue(getArray){
    return getArray[1];
}
console.log(returnSecValue(newar));
