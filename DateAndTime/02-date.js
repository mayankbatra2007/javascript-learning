// Current date and time
let today = new Date();
console.log(today);

// Specific date (Year, Month, Day)
let myDate = new Date(2026, 10, 9);
console.log(myDate);

// Date using string
let date1 = new Date("2026-11-09");
console.log(date1);

let date = new Date();

// Get methods
console.log(date.getFullYear()); // Year
console.log(date.getMonth());    // Month (0-11)
console.log(date.getDate());     // Day of month (1-31)
console.log(date.getDay());      // Day of week (0-6)

// Set methods
date.setFullYear(2027);
date.setMonth(5);
date.setDate(15);