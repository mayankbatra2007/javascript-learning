const marvel_heroes = ["thor", 'Ironman', "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// Arrays of  Arrays
// [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//concat()
const newA = marvel_heroes.concat(dc_heroes);
console.log(newA);
// combine two arrays into new single array

// spreads an array into eles
const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes);

// flattens array
const another_arr = [1,2,3, [4,5], 6, [7,8,9]];
const new_real = another_arr.flat(Infinity);
console.log(new_real);

let name = "mayank";
console.log(Array.isArray(name)); // check is array
console.log(Array.from(name)); // convert into array

let s1 = 100;
let s2 = 99;
let s3 = 89;
console.log(Array.of(s1, s2, s3));
// return array of vars
