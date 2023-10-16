const score = 400;
// console.log(score);

const balance = new Number(100); // Explicitly defining the number

// console.log(balance);

// console.log(typeof balance.toString());
// console.log(balance.toFixed(2)); // 100.00

const otherNumber = 1123.8966
// console.log(otherNumber.toPrecision(3)); // gives precise value in first 3 digits

const hundreds = 1000000;
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN')); // Indian standard


// ++++++++++++++++++ Maths ++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // changes negative to positive only
// console.log(Math.round(4.3));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.3)); // not 4, but 5 because of celing, as it means ahead
// console.log(Math.floor(4.9)); // round off to lowest value 4
// console.log(Math.sqrt(4));
// console.log(Math.pow(2,4));
// console.log(Math.min(4,3,5,6,2));

console.log(Math.random()); // random no between 0(inclusive) and 1(exclusive)
console.log(Math.floor((Math.random() * 10)) + 1);

// Math.random() always return value which is greater or greater than 0 and less than 1 always.

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);