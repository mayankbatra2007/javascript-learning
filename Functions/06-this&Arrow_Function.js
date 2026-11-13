

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }// this -> current context
}
user.welcomeMessage();
user.username = "sam"; // context switch
user.welcomeMessage();

// IMP** Browser global object -> Window

console.log(this); // in node env -> {}
console.log(this); // in Browser -> Window Object




function chai(){
    console.log(this);
}
chai(); // Most Broser window data

function chaiCode(){
    let user = "xyz";
    console.log(this.user); // undefined
    // this only for Objects
}
chaiCode();


// IMP** Arrow Function

const chaiAurCoffe = () => {
    let user = "xyz";
    console.log(user);
}
chaiAurCoffe();


const adds = (num1, num2) => {
    return num1 + num2; // explicit return
}
console.log(adds(2,2));

const subs = (num1, num2) => (num1 - num2);
// implicit return
console.log(subs(4,5));

