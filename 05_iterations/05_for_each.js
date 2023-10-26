// for each loop => most widely used loop
const coding = ["js", "ruby", "java", "python", "cpp"];

// type 'coding.' to see the methods related to array by default

// coding.forEach( function (arrayItem) {
//     console.log(`${arrayItem}`);
// })

// coding.forEach((arrayItem) => {
//     console.log(`${arrayItem}`);
// })

// function printMe(arrayItem) {
//     console.log(`${arrayItem}`);
// }

// coding.forEach(printMe);

// coding.forEach( (arrayItem) => {
//     console.log(`${arrayItem}`)
// })


// coding.forEach( (item, index, arr) => {
//     console.log(`${item} ${index} ${arr}`);
// } ) 


// array of objects

const myCoding = [
    {
        langaugeName: "javascript",
        langaugeFileName: "js" 
    },
    {
        langaugeName: "java",
        langaugeFileName: "java" 
    },
    {
        langaugeName: "python",
        langaugeFileName: "py" 
    }
]

myCoding.forEach( (language) => {
    console.log(`${language.langaugeName}: ${language.langaugeFileName}`);
})

// output:
// javascript: js
// java: java
// python: py



// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

