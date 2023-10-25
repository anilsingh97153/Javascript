// for loop

// const array = [1, 2, 3, 4, 5];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index]; 
//     console.log(element);
// }

// table of a number
// const num = 19;
// for (let index = 1; index <=10; index++) {
//     console.log(`${num} * ${index} = ${num*index}`);
// }


// Keywords 

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     // if the above condition becomes true then control will come out of the loop using 'break' keyword.
    
//     console.log(`Value of i is ${index}`);
    
// }


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;
    }
    // if the above condition becomes true then control will directly jump to the next iteration after skipping the current iteration using 'continue' keyword.
    
    console.log(`Value of i is ${index}`);
    
}
