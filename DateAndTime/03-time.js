let date = new Date();

console.log(date.getHours());       // Hours (0-23)
console.log(date.getMinutes());     // Minutes (0-59)
console.log(date.getSeconds());     // Seconds (0-59)
console.log(date.getMilliseconds());// Milliseconds

// time stamp
let date1 = new Date();

console.log(date1.getTime());
console.log(Date.now());