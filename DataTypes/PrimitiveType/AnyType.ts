// any is a parent type of all types
// if we not define type then it will any type by default

let data; // type is any and undefined in js
let val: any; //explicitely define  type any,  undefined in js
console.log(typeof data);
console.log(typeof val);

data = 10; // type is number because of value assigned assigned
console.log(typeof data);
data = "Hello"; // type is string because of value assigned assigned
console.log(typeof data);
data = true; // type is boolean because of value assigned assigned
console.log(typeof data);
