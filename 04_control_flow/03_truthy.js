const userEmail = "h@hitesh.ai"

if(userEmail) {
    // console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values => false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values => rest all are truthy values: "0", 'false'/"false", " ", [], {}, function() {}
// All the values inside quotes are considered as truthy value even if it is false, 0, etc. except empty string.
// empty array and empty object and empty function are also truthy.

const mail = []
if(mail.length === 0) {
    // console.log("Array is empty!");
}

const emptyObj = {} 
// if(Object.keys(emptyObj).length == 0) {
//     console.log("Object is empty !");
// }


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// console.log(val1);

// val1 = null ?? 10
// console.log(val1);

// val1 = undefined ?? 15
// console.log(val1);

val1 = null ?? 10 ?? 12
console.log(val1);

// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

// Description
// The nullish coalescing operator can be seen as a special case of the logical OR (||) operator. The latter returns the right-hand side operand if the left operand is any falsy value, not only null or undefined. In other words, if you use || to provide some default value to another variable foo, you may encounter unexpected behaviors if you consider some falsy values as usable (e.g., '' or 0). 

// The nullish coalescing operator has the fifth-lowest operator precedence, directly lower than || and directly higher than the conditional (ternary) operator.

// It is not possible to combine both the AND (&&) and OR operators (||) directly with ??. A syntax error will be thrown in such cases.


// Ternarry operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80");
