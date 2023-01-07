// var has global scope and allow Shadowing & Hoisting
// let has block scope and do not  allow Shadowing & Hoisting

console.log("*********** GLOBAL SCOPE ***********");

function globalScope() {
  // var x = 1000; // initialization
  // let y = 100; // initialization
  var x; // declaration
  x = 1000; //rendering
  let y; // declaration
  y = 100; //rendering

  console.log(x); // 1000
  console.log(y); // 100

  if (x == 1000) {
    console.log(x); // 1000
    console.log(y); // 100
    x = 10;
    y = 1;
    let z = 1010; //block level variable
    console.log(x); // 10
    console.log(y); // 1
    console.log(z); // 1010
  }
  console.log(x); // 10
  console.log(y); // 1
  // console.log(z); // Not Allowed
}
// Calling Function
globalScope();

console.log("*********** SHADOWING ***********");

function shadowing() {
  var x = 2000; // initialization
  let y = 200; // initialization

  console.log(x); // 2000
  console.log(y); // 200

  if (x == 2000) {
    console.log(x); // 2000
    console.log(y); // 200
    x = 20;
    y = 2020;
    console.log(x); // 20
    console.log(y); // 2020
    var x = 2000; // Shadowing
    // let y = 200000; // Shadowing not allowed
    console.log(x); // 2000
    console.log(y); // 2020
  }
  console.log(x); // 2000
  console.log(y); // 2020
}
// Calling Function
shadowing();

console.log("*********** HOISTING ***********");

function hoisting() {
  x = 3000; // initialization
  y = 300; // not a valid variable but still not throw error

  console.log(x); // 3000
  console.log(y); // 300 // still print

  if (x == 3000) {
    var x; // hoisting
    let y; //  hoisting not allowed
    console.log(x); // 3000
    console.log(y); // undefined
  }
  console.log(x); // 3000
  console.log(y); // 300 // still print
}
// Calling Function
hoisting();
