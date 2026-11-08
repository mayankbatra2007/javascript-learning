// ==========================================
// JAVASCRIPT STRING METHODS
// ==========================================

// 1. length
// Returns the total number of characters in a string.

let str = "JavaScript";
console.log(str.length); // 10


// 2. toUpperCase()
// Converts the string into uppercase.

let name = "mayank";
console.log(name.toUpperCase()); // MAYANK


// 3. toLowerCase()
// Converts the string into lowercase.

let course = "JAVASCRIPT";
console.log(course.toLowerCase()); // javascript


// 4. charAt()
// Returns the character at the specified index.

let language = "JavaScript";
console.log(language.charAt(0)); // J
console.log(language.charAt(4)); // S


// 5. at()
// Returns character at a specified index.
// Supports negative indexing.

let word = "Hello";
console.log(word.at(0));  // H
console.log(word.at(-1)); // o


// 6. indexOf()
// Returns the first occurrence index.
// Returns -1 if value is not found.

let text = "Hello JavaScript";
console.log(text.indexOf("Java")); // 6
console.log(text.indexOf("Python")); // -1


// 7. lastIndexOf()
// Returns the last occurrence index.

let str2 = "hello hello";
console.log(str2.lastIndexOf("hello")); // 6


// 8. includes()
// Checks whether a string contains a particular value.
// Returns true or false.

let sentence = "I am learning JavaScript";
console.log(sentence.includes("JavaScript")); // true
console.log(sentence.includes("Python")); // false


// 9. startsWith()
// Checks whether a string starts with a particular value.

let str3 = "JavaScript Language";
console.log(str3.startsWith("Java")); // true


// 10. endsWith()
// Checks whether a string ends with a particular value.

let str4 = "JavaScript";
console.log(str4.endsWith("Script")); // true


// 11. slice()
// Extracts a part of a string.
// Ending index is excluded.
// Supports negative indexing.

let str5 = "JavaScript";
console.log(str5.slice(0, 4));  // Java
console.log(str5.slice(4, 10)); // Script
console.log(str5.slice(-6));    // Script


// 12. substring()
// Extracts characters between two indexes.
// Ending index is excluded.
// Does not support negative indexing like slice().

let str6 = "JavaScript";
console.log(str6.substring(0, 4)); // Java
console.log(str6.substring(4, 10)); // Script


// 13. replace()
// Replaces the first matching occurrence.

let str7 = "Hello World";
console.log(str7.replace("World", "Mayank"));
// Hello Mayank


// 14. replaceAll()
// Replaces all matching occurrences.

let str8 = "Hello Hello Hello";
console.log(str8.replaceAll("Hello", "Hi"));
// Hi Hi Hi


// 15. trim()
// Removes whitespace from both ends.

let str9 = "   Mayank   ";
console.log(str9.trim()); // Mayank


// 16. trimStart()
// Removes whitespace from the beginning.

let str10 = "   Hello";
console.log(str10.trimStart()); // Hello


// 17. trimEnd()
// Removes whitespace from the ending.

let str11 = "Hello   ";
console.log(str11.trimEnd()); // Hello


// 18. split()
// Converts a string into an array.

let str12 = "Apple Banana Mango";
console.log(str12.split(" "));
// ["Apple", "Banana", "Mango"]


// 19. concat()
// Joins two or more strings.

let first = "Mayank";
let last = "Batra";

console.log(first.concat(" ", last));
// Mayank Batra


// 20. repeat()
// Repeats a string a specified number of times.

let str13 = "Hello ";
console.log(str13.repeat(3));
// Hello Hello Hello


// 21. padStart()
// Adds characters at the beginning until the given length.

let num = "5";
console.log(num.padStart(3, "0"));
// 005


// 22. padEnd()
// Adds characters at the ending until the given length.

let num2 = "5";
console.log(num2.padEnd(3, "0"));
// 500


// 23. search()
// Searches using a string or regular expression.
// Returns the index of the first match.

let str14 = "I love JavaScript";
console.log(str14.search("JavaScript")); // 7


// 24. match()
// Returns matching results using a regular expression.

let str15 = "Hello 123 World 456";
console.log(str15.match(/\d+/g));
// ["123", "456"]


// 25. matchAll()
// Returns an iterator containing all matches.

let str16 = "cat bat rat";
let result = [...str16.matchAll(/at/g)];

console.log(result.map(item => item[0]));
// ["at", "at", "at"]


// 26. localeCompare()
// Compares two strings alphabetically.
// Returns negative, zero or positive value.

console.log("Apple".localeCompare("Banana")); // Negative
console.log("Apple".localeCompare("Apple"));  // 0


// 27. valueOf()
// Returns the primitive value of a String object.

let str17 = new String("JavaScript");
console.log(str17.valueOf()); // JavaScript


// 28. toString()
// Converts a value into a string.

let value = 123;
console.log(value.toString()); // "123"


// 29. normalize()
// Returns the Unicode normalization form of a string.

let str18 = "é";
console.log(str18.normalize("NFC"));


// 30. isWellFormed()
// Checks whether a string contains valid Unicode surrogate pairs.

let str19 = "Hello";
console.log(str19.isWellFormed()); // true


// 31. toWellFormed()
// Replaces lone surrogates with Unicode replacement characters.

let str20 = "Hello";
console.log(str20.toWellFormed()); // Hello