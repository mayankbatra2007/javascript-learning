const account = 144553;
let accountEmail = "mayank2007@gmail.com";
var accountPass = "12345";
accountCity = "Jaipur"; // not a good way
let accountState;


// account = 2; const -> can not be modified
// var -> scope problem -> can be modified -> cause loose of data
// Prefer not to use

accountEmail = "hc@hc.com";
accountPass = "221";
accountCity = "Bengaluru";

console.log(account);

console.table([account, accountEmail, accountPass, accountCity]);

console.log(accountState); // Undefined -> when variable declared -> value not assigned


// <-- Notes -->
/*
const (constant)
-> declare variables whose value cannot be reassigned
-> must be intailized during declaration
-> can not be modified latter

let 
-> used to decalre variables whosevvalue can be changed
-> Block scope {}
-> cannot be redecalred in the same scope

var
-> old way
-> function scoped
-> can be redecalred and reassigned
-> cause bugs
*/