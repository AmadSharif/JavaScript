let marks = [97, 87, 93, 63, 86];
// use filter-method
let toppers = marks.filter((val) => {
  return val > 90;
});
console.log(toppers);

// take a number as input from the user,create an array from 1 to n.

let userInp = prompt("Enter a number");
let myArr = [];
for (let i = 1; i <= userInp; i++) {
  myArr[i - 1] = i;
}
console.log(myArr);

// use reduce-method to calculate the sum of all numbers in the array;
let sum = myArr.reduce((prev, curr) => {
  return prev + curr;
});
console.log("sum of all numbers in the array =", sum);

// find the product of all numbers in array using reduced method;

let factorial = myArr.reduce((prev, curr) => {
  return prev * curr;
});
console.log("Factorial of all numbers in the array =", factorial);
