// Singleton Objects
const tinderUser = new Object();
console.log(tinderUser);

tinderUser.id = "123ab";
tinderUser.name = "Sam";

// console.log(tinderUser);

const regularUser = {
    email: "some2026",
    fullName: {
        userFullName: {
            firstName: "hitseh",
            lastName: "c"
        }
    }
} 
console.log(regularUser.fullName?.userFullName.firstName);
// IMP** -> ? used bcz it checks whether value exists or not

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a", 4:"b"};

// Like Concatenation
const obj3 = { obj1, obj2 };
console.log(obj3);
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// destrcuturing
const obj5 = {...obj1, ...obj2};
console.log(obj5);

// Array Of Object
const users = [
    {
        id: 1,
        price: 350
    },
    {
        id: 2,
        price: 650
    }
];

users[1].price = 599;

console.log(Object.keys(tinderUser)); // array of object keys
console.log(Object.values(tinderUser)); // array of objects of values
console.log(Object.entries(tinderUser)); //  entries
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // check whether the object has property or not

