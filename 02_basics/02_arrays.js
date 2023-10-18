const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes); // push will consider dc_heroes as a single element for the marvel_heroes array, which will eventually push the whole as single element in the array which is quite problematic.

console.log(marvel_heroes);

const all_heroes = marvel_heroes.concat(dc_heroes); // now it will work differently, will merge both the arrays correctly.
// console.log(all_heroes);

// const all_new_heroes = [...marvel_heroes, ...dc_heroes]; // quite easy, good and method than concat, because we can easily add n number of arrays eaily to be merged in a new array.
// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5 ]]];
const real_another_array = another_array.flat(Infinity); // spread out: flat will make all the elements to be stored in a single array as an individual elements of that single array only, whenever there is an array containing array which again containing array and so forth. 
// argument in flat can 0, 1, 2, 3...etc. which indicates the depth till which we want to flat the array, in case of tedious situation we can write 'infinity' as well, but not the best practice.
console.log(real_another_array);
console.log(Array.isArray("Anil")); // to check, while web scraping whether any list is array or not 

// if not array then use the below method to convert it to array
console.log(Array.from("Anil"));
console.log(Array.from({name:"Anil"})); // empty string [] will be output, as from will be able to make object as an array.
// interesting note => whenever 'from()' is not able to convert a list or strings or anything to an array, it will return an empty string.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));