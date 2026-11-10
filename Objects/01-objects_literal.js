// object literals
const JsUser = {};

const mySum = Symbol("key1");

const JsUser_Two = {
    // behind the scene the var key is read as "name", "age" etc
    name: "Mayank",
    'fullName': "MB", // not access by dot OP
    age: 19,
    [mySum]: "key1",// IMP**
    location: "UMB",
    email: "mayank2007",
    isLoggedIn: false,
    lastLoginDays: ["Monday", 'Saturday']
};
console.log(JsUser_Two.email);
console.log(JsUser_Two["email"]);
console.log(JsUser_Two["fullName"]);
console.log(typeof JsUser_Two[mySum]); // typec-> String -> no longer symbol
// IMP** so convert in Object JsUser_Two -> [mySum]: "key1"




// singleton object -> created using Constructor
// Object.create
