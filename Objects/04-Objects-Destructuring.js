const course = {
    coursename: "js in hindi",
    price: "999",
    cousreInstructor: "hitesh"
}
// IMP** Destructuring of Objects
// course.cousreInstructor
// Easy way to use above
const {cousreInstructor} = course;
console.log(cousreInstructor);

// more addons on above
const {cousreInstructor: instructor} = course;

// JSON also Object for data through API
// {
//     "name": "mayank",
// }
