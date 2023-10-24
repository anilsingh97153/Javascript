// global scope
// var c = 300

let a = 300
// start of block scope
if(true) {
    let a = 10
    const b = 20
    // var c = 30 // whether you create var or without any datatype like c = 30, still it will be a global variable which is problematic.
}
// end of block scope

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "anil"

    function two() {
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}

one()



if(true) {
    const username = "anil"
    if(username == "anil") {
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


//  ++++++++++++++++ Interesting +++++++++++++++

console.log(addone(5));
function addone(num) {
    return num + 1
}



// function as an expression
console.log(addTwo(5));
const addTwo = function(num) {
    return num + 2
}

