// function definition
function sayMyName() {
  console.log("Anil");
  console.log("Singh");
  console.log("Suyal");
}


// function call
// sayMyName();

// function addTwoNumbers(number1, number2) // number 1, number2 => parameters 
// {
//    console.log(number1 + number2);
// }


// addTwoNumbers(5,7); // 5,7 => arguments
// addTwoNumbers(4,"5"); // 45
// addTwoNumbers(3, null); // 3
// addTwoNumbers(3, "a"); // 3a
// console.log(result); // undefined

// function addTwoNumbers(number1, number2){
//    let result = number1 + number2;
//    return result;
// }

// const result = addTwoNumbers(2,3);
// console.log(result);

function loginUserMessage(userName) {
    return `${userName} just logged in.`
}

console.log(loginUserMessage("Anil"));
console.log(loginUserMessage()); // If I don't pass anything to function => undefined just logged in.