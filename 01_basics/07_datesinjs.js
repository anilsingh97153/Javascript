// Dates 

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23, 5, 3); // args => year, month, date, hour, minutes (we can skip some args as well)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now(); // current date in millisecond.
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // Fetching the amount of time from Jan 1, 1970 till "01-14-2023", in order to get its millisecond value.
// console.log(Date.now()/1000);  
// console.log(Math.floor(Date.now()/1000)); // time from millisecond to seconds. 

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());

// `${newDate.getDate()} and the time`

console.log(newDate.toLocaleString('default', {
    weekday:"long",
    day: "2-digit",
    month: "long",
    year:"numeric",
    hour:"2-digit",
    minute:"2-digit",
    second:"2-digit"
})); // important method. arguments => internalization, object