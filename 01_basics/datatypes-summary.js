// Primitive: call by value

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100; // Number
// const scoreValue = 100.3; // Number

// const isLoggedIn = false;
// const outsideTemp = null;
// let userEmail; 

// const id = Symbol('123');
// const anotherId = Symbol('123');

// console.log(id == anotherId);

// const id1 = Symbol(124); // Symbol type return Symbol type only.
// const anotherId1 = Symbol(124);

// const bigNumber = 234576547656543278654n; // ending with 'n' makes it BigInt manually.

// Javascript is a dynamically typed language, because we don't need to defined datatypes to variables.

// Reference (Non primitive)

// types: Array, Objects, Functions

// Array 
// const heroes = ["Shaktiman", "Naagraaj", "Doga"]

// // Objects: key value pairs
// let myObj = {
//     name: "Anil",
//     age:22,
// }

// const myFunction = function() {
//     console.log("Hello world");
// }

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof myObj);
// console.log(typeof myFunction); // function object
// console.log( typeof heroes);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive: copy of value), Heap (Non-Primitive: Refrence of value)

// Stack: with an example of variables
let mySiteName = "anilsinghdotcom";

let anotheName = mySiteName; 
anotheName = "newsite"; // If it would have used heap then when assigining mySiteName to anotherName, then both of the them should have point to the same memory location. But here a copy of mySiteName is being assigned, so mySiteName will remain affected even if we make changes in anotherName.

console.log(mySiteName);
console.log(anotheName);


// Heap: with an example of object
let userOne = {
    email: "user1@google.com",
    upi: "user1@ybl"
}

let userTwo = userOne; // Direct reference of userOne is ssigned to userTwo, even though variable userTwo is declared

userTwo.email = "user2@google.com";
userTwo.upi = "user2@ybl";

console.log(userOne);
console.log(userTwo);

const num = 56n;

console.log(typeof num);
