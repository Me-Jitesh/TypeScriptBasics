let str1: string = "Hello";
let str2: string = "World !";
let str3: string = `From Typescript`;

console.log(str1 + " " + str2 + " " + str3);
console.log(`${str1} ${str2} ${str3}`); //Simlify above expression
// console.log'Hola From=${str3}');//Not Allowedd
// console.log"Hola From=${str3}"); //not allowed

console.log("************* String Manipulation Functions ************");

let str: string = "0123456789 crAzy Typescript";

console.log(str.charAt(5)); //5
console.log(str.charCodeAt(1)); //49 ASCII Value
console.log(str.indexOf("cr")); //11
console.log(str.indexOf("cr7")); // -1 if not exist
console.log(str.lastIndexOf("y")); //18, -1 for Capital Y

console.log("************* SubString ************");

console.log(str.length);
console.log(str.substring(0)); //0123456789 crAzy Typescript
console.log(str.substring(0, 9)); //012345678 , last index excluded
console.log(str.substring(15, 7)); //789 crAz , it swaps the agument if start > end
console.log(str.substring(0, 30)); // 0123456789 crAzy Typescript , replace end index with length
console.log(str.substring(0, -25)); // print nothing  , replace end index with 0
console.log(str.substring(5, -25)); // 01234  , replace end index with 0 and swap if start is greater
console.log(str.substring(-25, 10)); // 0123456789  , replace -ve  index with 0
console.log(str.substring(0, NaN)); // print nothing  , replace NaN index with 0
console.log(str.substring(NaN, NaN)); // print nothing  , replace NaN index with 0
console.log(str.substring(NaN, 10)); // 0123456789  , replace NaN index with 0
console.log(str.substring(10, NaN)); // 0123456789  , replace NaN index with 0 and swap if start greater
console.log(str.substring(9, 9)); // print nothing
console.log(str.substring(28)); // print nothing
console.log(str.substring(27, 30)); // print nothing
