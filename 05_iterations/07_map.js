// map 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) => num + 10 )

// chaining => using nested filter and maps

// using first map - each num in nums will be multiplied by 10
// uisng second map - num argument in the callback function of 2nd map is now a num * 10, due to 1st map.
const newNums = myNums
                .map( (num) => num *10) // mutiplies all the nums to 10
                .map( (num) => num + 1) // add 1 to all the nums which are obtained after above step
                .filter((num) => num >= 40) // return only those nums from above result which is greater or equal to 40
console.log(newNums);

// filter is used to filter or return values based on some condition. It checks for the condition.
// map is used to make manipulation to the values.
