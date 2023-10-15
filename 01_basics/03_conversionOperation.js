let score = "33abc"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)


// "33" => 33 // type: number
// "33abc" => NaN(not a number) // type: number
// true => 1; false => 0 // type: number 
// null => 0 // type: object
// undefined => NaN // type: undefined

let isLoggedIn = 1

let booleanLoggedIn = Boolean(isLoggedIn)

console.log(typeof booleanLoggedIn) 

console.log(booleanLoggedIn)

// 1 or non zero number => true; 0 => false // type: boolean
// "" => false // type: boolean
// "Anil" => true // type:boolean 


let someNumber = 33

let stringNumber = String(someNumber)

console.log(typeof stringNumber)

console.log(stringNumber)