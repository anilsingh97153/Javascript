const name = "anil";
const repoCount = 50;

// console.log(name + repoCount + " Value"); // Not recommended to use such format in modern coding.

console.log(`Hello my name is ${name} and my repor count is ${repoCount}.`); // string interpolation feature: a modern way to write strings on the go with more customization.

const gameName = new String('anil singh');
// const game = "anil";

// console.log(typeof gameName); // Datatype: object
// console.log(typeof game); // Datatype: string

// console.log(gameName);
// console.log(game);

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());  // copy will be used.

// console.log(gameName); // unchenaged as it immutable

// console.log(gameName.charAt(5));

// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4);

console.log(newString);

// Go through all the related methods once.

const anotherString = gameName.slice(0,4); // in slice I can give negative values as well, which eventually starts from reverse.

const newStringOne = "\nanil\n    singh"; // trim() removes whitespaces including line terminators before starting and after ending of a string.
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://anil.com/anil%20singh"
console.log(url.replace('%20', '-'));
console.log(url.includes('anil',8)); // or escape number 8 as well.

console.log(gameName.split());

const str = "Hello-Anil-Singh-Suyal";
console.log(str.split('-')); // [ 'Hello', 'Anil', 'Singh', 'Suyal' ]