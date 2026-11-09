// Arrays - Data Structure

const myArr = [0,1,2,3,4,5, true, "mayank"];
// collection of items inside single variable
console.log(myArr); // print array


// acess eles
console.log(myArr[0]);
// 0 based indexing

// Arrays -> Shallow copy
// means share same reference 

// <-- Methods -->

// push(ele)
myArr.push(6); // add ele at end
console.log(myArr);
myArr.push(121);
console.log(myArr);

// pop() -> remove from end
myArr.pop();
console.log(myArr);
console.log(myArr.pop());

// unshift(ele) add ele at start
myArr.unshift(134);
console.log(myArr);

// shift() remove ele from start
myArr.shift(myArr);
console.log(myArr);

// includes(ele)
console.log(myArr.includes(true));

// indexOf(ele) -> first occ
console.log(myArr.indexOf('mayank'));

// join() add all eles into string
const newArr = myArr.join();
console.log(newArr); // "0,1,2,3,4,5,true,mayank"
console.log(typeof newArr); // string

// slice(start, end) end -> exc
const myn1 = myArr.slice(1,3);
console.log(myArr);
console.log(myn1);

// splice(start, end) end -> inc
// IMP ** splice also MAINPULATE the orignal Array
const myn2 = myArr.splice(1,3);
console.log(myArr);
console.log(myn2);

