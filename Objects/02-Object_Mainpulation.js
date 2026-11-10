const mySum = Symbol("key1");

const JsUser_Two = {
    name: "Mayank",
    'fullName': "MB", // not access by dot OP
    age: 19,
    [mySum]: "key1",// IMP**
    location: "UMB",
    email: "mayank2007",
    isLoggedIn: false,
    lastLoginDays: ["Monday", 'Saturday']
};
// Update Info in Object
JsUser_Two.email = "mayank2026";
console.log(JsUser_Two["email"]);

// We want to PROTECT (no body can change the Object data)
// Object.freeze(JsUser_Two); // IMP**
JsUser_Two.email = "mayank2007";
console.log(JsUser_Two.email); // no change

// add function in Object
JsUser_Two.greeting = function(){
    console.log("Hello JS User");
}
JsUser_Two.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser_Two.greeting());
console.log(JsUser_Two.greetingTwo());