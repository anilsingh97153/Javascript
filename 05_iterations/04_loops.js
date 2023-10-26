// for in loop
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key}:- ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];
for(const key in programming) {
    // console.log(`${key}`); // print all the keys/ indices of the array
    // console.log(`${programming[key]}`); // prints array element
}

// Maps => contains unique key value pairs

const map = new Map()
map.set('Name', "Anil");
map.set('age', "22");

for (const key in map) {
    console.log(`${key}`);
}

