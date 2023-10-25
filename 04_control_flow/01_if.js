// if 

const iseUserLoggedIn = true;
if (true) {
    // control comes here.
}

if (false) {
    // control does not come here.
}

if(iseUserLoggedIn) {

}

// Comparison operators
// <, >, <=, >=, ==(Loose check, just check the values, not the datatypes ), ===(Strict check => Along with the values, it checks datatypes as well.), !=
// The == operator performs a loose equality comparison that performs type coercion if necessary to make the comparison possible. The === operator, on the other hand, performs a strict equality comparison that does not perform type coercion and requires the operands to have the same type (as well as the same value).

if(true) {

}
else{

}


const score = 200

if(score> 100) {
    const power = "fly"
    // console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);


const balance = 1000

// implicit scope => works for just one line after 'if' keyword.
if(balance > 500) console.log("test");

// Never do below
// if(balance > 500) console.log("test"), console.log("test");
// if(balance > 500) console.log("test"), 
// console.log("test");

// if(balance < 500) {
//     console.log("Less than");

// } else if(balance < 750) {
//     console.log("less than 750");

// } else if(balance < 900) {
//     console.log("less than 900");

// } else {
//     console.log("less than 1200");
// }   

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromMail = true

if(userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromMail) {
    console.log("User logged in");
}


