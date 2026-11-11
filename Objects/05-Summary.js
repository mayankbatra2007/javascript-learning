// Object -> js collection of key-value pairs
// used to store related data and fucntionality together

//1. key
//2. value
//3. method

// create object
let student = {
    name: "Mayank",
    age: 19,
    course: "CSE",
    university: "Chitkara"
};
// access properties
console.log(student.name);  // Mayank
console.log(student.age);   // 19

// Access - Two Ways
// 1. Dot Notation
console.log(student.name); // Mayank
// 2. Bracket Notation
console.log(student["name"]); // Mayank

// add new Property
student.city = "UMB";
console.log(student.city);

// Update object properties
student.age = 20;
console.log(student.age);

// Delete Property
delete student.city;
console.log(student.city); // undefined

// Method inside object
let another_stud = {
    name: "xyz",
    age: 19,
    introduce: function(){
        console.log("Hello, i am "+ this.name);
    }
};
// call
another_stud.introduce(); 
// this -> refers to current object]

// Nested Objects
let address = {
    houseno: 9767,
    street: "akb",
    city: {
        name: "UMB",
        pincode: 134003
    }
};
console.log(address.city.pincode);

// Methods

// 1. Object.keys() - Returns all keys
console.log(Object.keys(student));
// ["name", "age", "course"]

// 2. Object.values() - Returns all values
console.log(Object.values(student));
// ["Mayank", 19, "CSE"]

// 3. Object.entries() - Returns key-value pairs
console.log(Object.entries(student));

// 4. Object.hasOwn() - Checks if property exists
console.log(Object.hasOwn(student, "name")); // true
console.log(Object.hasOwn(student, "marks")); // false

// Destructuring
// Extracting properties
let { name, age, course } = student;
console.log(name);   // Mayank
console.log(age);    // 19
console.log(course); // CSE

// Copying properties into another object
let newStudent = { ...student, course: "CSE" };
console.log(newStudent);


// Object.freeze()
let student = {
    name: "Mayank",
    age: 19
};

Object.freeze(student);

// Cannot add, delete or update properties
student.age = 20;

console.log(student.age); // 19

// Object.seal()
let student = {
    name: "Mayank",
    age: 19
};

Object.seal(student);

// Can update existing properties
student.age = 20;

// Cannot add or delete properties
console.log(student.age); // 20