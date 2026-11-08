// String Intro
// String -> primitive datatype , used to store text
// String are IMMUTABLE -> methods return new String

const name = "mayank";
const repoCount = 6;
// String concatenation
console.log(name + repoCount + " value");
// "mayank6 value"
// this is outdated syntax

// <--------->

// Concepts of Backticks
// String interplotation -> insert variables inside string
console.log(`Hello my name is ${name} and my rep count is ${repoCount}`);


const gameName = new String("mayankB");
// create new object in memory
// String -> Object

console.log(gameName[0]); // m
console.log(gameName.__proto__); // {}

// length
console.log(gameName.length); 

// toUpperCase()
console.log(gameName.toUpperCase());
// this made the new copy of string
 
// char at specific index
console.log(gameName.charAt(2));

// index of first occ of char
console.log(gameName.indexOf('m'));

// substring(start, end) end ->  exc , if we give -ve to substring -> it will start from o
const newString = gameName.substring(0, 4); // (start, end) end -> exclusive

// slice(range)
const anotherString = gameName.slice(-8, 4);
console.log(anotherString);
// -ve will be counted for each char

const sampleString = "  have a great day   ";
console.log(sampleString);
console.log(sampleString.trim());
// remove extra spaces from both ends


// replace('old', 'new');
const url = "https://mayankGit.com";
console.log(url);
const newUrl =  url.replace('may', '-');
console.log(newUrl);

// includes()
console.log(url.includes('Git'));
