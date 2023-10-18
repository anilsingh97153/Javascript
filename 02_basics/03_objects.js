// singleton => whenever an object is decalred using contructor.

// using literals object does not become singleton

// object literals

// const JsUsers = {} // object declaration method-1
// Object.create() // wingleton => object creation through constuctor method

// symbols

const mysym = Symbol("key1");

// by default keys in objects are treated as string, so you can write "name" or just name.
const JsUsers = {
    name: "Anil",
    "full name": "Anil Singh",
    [mysym]: "mykey", // [] used for symbol
    age: 22,
    location: "Jaipur",
    email: "anil@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} 
// if I surround a key in double quotes then by any chance I can't access that key, will the help of .(dot) operator(example - JsUsers.full name). That's why JsUsers["full name"] is recommended.

// accessing the values of objects
console.log(JsUsers.email); // not a good way
console.log(JsUsers["email"]); // correct and recommended way
console.log(JsUsers[mysym]);

JsUsers.email = "anil@chatgpt.com";
// Object.freeze(JsUsers); // changes will not reflect to original object and its properties

JsUsers.age = 23; // this will actually not change anything, because we had freezed the JsUsers object.

console.log(JsUsers);

JsUsers.greeting = function() {
    console.log("Hello JS user");
}

JsUsers.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUsers.greeting); // [Function (anonymous)]
console.log(JsUsers.greeting()); 
console.log(JsUsers.greetingTwo()); 







