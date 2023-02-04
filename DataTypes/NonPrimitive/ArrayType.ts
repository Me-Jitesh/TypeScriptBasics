//  statement declaration and initialization

let alphas: string[]; // declaration
alphas = ["1", "2", "3", "4", "Hello", "h", "@"]; // initialization
console.log(alphas[0]);
console.log(alphas);

// Single statement declaration and initialization
let nums: number[] = [10, 20, 20, 40, 30];
console.log(nums[3]);
console.log(nums);

// Array Object

let arr_names: number[] = new Array(4);

for (let i = 0; i < arr_names.length; i++) {
  arr_names[i] = i * 2;
}
console.log(arr_names);

// Array Constructor accepts comma separated values

var names: string[] = new Array("Mary", "Tom", "Jack", "Jill");

for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}
