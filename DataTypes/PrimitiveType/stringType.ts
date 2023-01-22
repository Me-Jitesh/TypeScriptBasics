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
