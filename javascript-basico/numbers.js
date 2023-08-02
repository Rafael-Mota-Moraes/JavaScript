let num1 = 10.4584;
let num2 = 2.5;

console.log(num1.toString() + num2);
// num1 = num1.toString();
console.log(typeof num1);
// console.log(num1.toString(2));
console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));

let temp = num1 * "Olá";

console.log(Number.isNaN(temp));

// I3E74-2008

console.log((0.7 + 0.1 + 0.1 + 0.1).toFixed(0));
