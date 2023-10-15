// console.log(2 > 1); 
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 2);
// console.log(2 != 1);


// Problem occurs when we don't compare the same datatypes

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// equality(==) and comparisons(>, <, >=, <=) work differently. Comparisons convert null to a number, that's why null==0 is true because null is not converted into a number, whereas in > and >= it is converted.

console.log(undefined == 0);

// strict check: === it not just check the values but checks the datatypes as well.

console.log("2" === 2); // false
console.log("2" == 2); //