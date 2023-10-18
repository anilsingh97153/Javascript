// singleton object

const tinderUser = new Object(); // singleton object
const tinderUser1 = {}; // non singleton object
// console.log(tinderUser); // same as below one
// console.log(tinderUser1);

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


// objects inside objects (nested objects)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Anil",
            lastname: "Singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


// Merging objects 

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

// const obj3 = { obj1, obj2};
// console.log(obj3); // o/p: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1,obj2); // first arg in assig method is treated like target object and rest are source, that's why if we give {} as first give so it make sure to act like a target. 
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1, ...obj2};
// console.log(obj3);

// array of object
const users = [
    {
        id: 1,
        email: "a@gmail .com"
    },
    {
        id: 2,
        email: "b@gmail .com"
    },
    {
        id: 3,
        email: "c@gmail .com"
    }
];

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // array of all the keys of an object. It is very interesting and really important from the perspective of databases.

// console.log(Object.values(tinderUser)); // array of all the values of an object

// console.log(Object.entries(tinderUser)); //inside an array each key value pair is stored as an array.

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true


// Object destructuring

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// const {courseInstructor} = course;
// console.log(courseInstructor);

const {courseInstructor:instructor} = course;
console.log(instructor);


// JSON => an object with no name
// {
//     "name": "Hitesh",
//     "coursename":"js in hindi",
//     "price": "free"
// }