// var has global scope and allow Shadowing & Hoisting

console.log("*********** GLOBAL SCOPE ***********");

function globalScope() {
  var x = 1000; // initialization

  console.log(x); // 1000

  if (x == 1000) {
    console.log(x); // 1000
    x = 10;
    console.log(x); // 10
  }
  console.log(x); // 10
}
// Calling Function
globalScope();

console.log("*********** SHADOWING ***********");

function shadowing() {
  var x = 2000; // initialization

  console.log(x); // 2000

  if (x == 2000) {
    console.log(x); // 2000
    x = 20;
    console.log(x); // 20
    var x = 2000; // Shadowing
    console.log(x); // 2000
  }
  console.log(x); // 2000
}
// Calling Function
shadowing();

console.log("*********** HOISTING ***********");

function hoisting() {
  x = 3000; // initialization

  console.log(x); // 3000

  if (x == 3000) {
    var x; // hoisting
    console.log(x); // 3000
  }
  console.log(x); // 3000
}
// Calling Function
hoisting();
