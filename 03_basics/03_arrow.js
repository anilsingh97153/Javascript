// interview questions
const user = {
    username: "anil",
    price: 199,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();

// console.log(this); // o/p: {} empty => inside the node enviornment, 'this' keyword refers to empty object(which is window as the global object in case of the browser).


// function chai() {
//     let username = "anil"
//     // console.log(this.username); // this can't be used inside function
// }

// chai();

// const chai = function() {
//     let username = "anil"
//     console.log(this.username);
// }

// chai();

// const chai = () => {
//     let username = "anil"
//     console.log(this);
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// impicit return (that means no need to write return keyword) in case of just one line of code inside the function and return can be ignored
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username:"anil"}) // in order to return the object in single line, it is must to surround object within the paranthesis, just like (num1 + num2)

console.log(addTwo(3, 4));

const myArray = [2, 5, 3, 7, 8]

myArray.array.forEach(element => {
    
});

