// var has global scope and allow Shadowing & Hoisting
// let has block scope and do not  allow Shadowing & Hoisting
// const has block level scope and does not  allow Re-Initialization,Declaration, Rendering,Shadowing & Hoisting

console.log("*********** GLOBAL SCOPE ***********");

function globalScope(): void {
  var x = 1000; // initialization
  let y = 100; // initialization
  const PI = 3.14; // initialization
  // var x; // declaration
  // x = 1000; //rendering
  // let y; // declaration
  // y = 100; //rendering
  // const PI; // declaration not allowed
  // PI = 100; //rendering  not allowed

  console.log(x); // 1000
  console.log(y); // 100
  console.log(PI); // 3.14

  if (x == 1000) {
    console.log(x); // 1000
    console.log(y); // 100
    console.log(PI); // 3.14
    x = 10;
    y = 1;
    // PI =22/7; // re-initialization not allowed
    let z = 1010; //block level variable
    console.log(x); // 10
    console.log(y); // 1
    console.log(z); // 1010
    console.log(PI); // 3.14
  }
  console.log(x); // 10
  console.log(y); // 1
  // console.log(z); // Not Allowed
  console.log(PI); // 3.14
}
// Calling Function
globalScope();

console.log("*********** SHADOWING ***********");

function shadowing(): void {
  var x = 2000; // initialization
  let y = 200; // initialization
  const PI = 3.14; // initialization

  console.log(x); // 2000
  console.log(y); // 200
  console.log(PI); // 3.14

  if (x == 2000) {
    console.log(x); // 2000
    console.log(y); // 200
    console.log(PI); // 3.14
    x = 20;
    y = 2020;
    // PI =22/7; // re-initialization not allowed
    console.log(x); // 20
    console.log(y); // 2020
    console.log(PI); // 3.14
    var x = 2000; // Shadowing
    // let y = 200000; // Shadowing not allowed
    // const PI = 22 / 7; // Shadowing not allowed
    console.log(x); // 2000
    console.log(y); // 2020
    console.log(PI); // 3.14
  }
  console.log(x); // 2000
  console.log(y); // 2020
  console.log(PI); // 3.14
}
// Calling Function
shadowing();

console.log("*********** HOISTING ***********");

function hoisting(): void {
  x = 3000; // initialization
  // y = 300; // not a valid variable
  // PI = 3.14; // not a valid variable

  console.log(x); // 3000
  // console.log(y); // 300
  // console.log(PI); // 3.14

  if (x == 3000) {
    var x; // hoisting
    let y; //  hoisting not allowed
    // const PI; // hoisting not allowed
    console.log(x); // 3000
    console.log(y); // undefined
    // console.log(PI); // 3.14
  }
  console.log(x); // 3000
  // console.log(y); // 300
  // console.log(PI); // 3.14
}
// Calling Function
hoisting();

console.log("*********** GLOBAL VARIABLE ***********");

var a;
let b = 55;
// const z; // Not allowed
const con = 70;
function globalVariableFun1(): void {
  a = 50;
  b = 60;
  console.log(a); // 50
  console.log(b); // 60
  console.log(con); // 70
}
globalVariableFun1();

function globalVariableFun2(): void {
  a = 500;
  b = 600;
  console.log(a); // 500
  console.log(b); // 600
  console.log(con); // 70
}
globalVariableFun2();
