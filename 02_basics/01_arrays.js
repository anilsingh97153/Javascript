// array

const myArr = [0, 1, 2, 3, 4, 5]
// Shallow copy => copy of an object whose properties share the same reference.
// Deep copy => properties do not share the same reference. Rather uses a copy.

const myHeroes = ["shaktimaan", "naagraaj"];
const myArr2 = new Array(1,2,3,4);
// console.log(myArr2[2]);
// console.log(typeof myArr, typeof myHeroes, typeof myArr2);


// Array methods
// console.log(`Initial array: ${myArr}`);
// myArr.push(6);
// myArr.push(7);
// console.log(`After adding 6 & 7: ${myArr}`);
// myArr.pop();
// console.log(`Popped one element: ${myArr}`);

// myArr.unshift(9); // Insert at 0th index, and other numbers are shifted to right.
// console.log(`use of unshift: ${myArr}`);
// myArr.shift(9); // Remove the value of 0th index ,and other numbers are shifted to left.
// console.log(`use of shift: ${myArr}`);

// console.log(`Includes 6? ${myArr.includes(6)}`); // false
// console.log(`Index of 9: ${myArr.indexOf(9)}`); // -1 for every value which does not exist in the array, else the real index.
// console.log(`Index of 3: ${myArr.indexOf(3)}`);

// const newArr = myArr.join(); // adds all the elements of an array into string. 
// console.log(`myArr: ${myArr}, type: ${typeof myArr}`);
// console.log(myArr);
// console.log(`newArr: ${newArr} type: ${typeof newArr}`);

// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3); // 1 inclusive and 3 exclusive
console.log(myn1);

console.log("B ", myArr);
const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log(myArr);


// Difference => Splice manipulates the original array. in this case it is myArr. array from position 1 to 3 in case of splice will be removed the original array, on which splice is being applied. Start and end both are inclusive as well in case of splice.