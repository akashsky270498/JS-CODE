const subjects = {
    js: "JavaScript",
    ts: "TypeScript",
    py: "Python",
    rb: "Ruby",
    sw: "Swift",
    cpp: "C++"
}

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }

for (const subject in subjects) {
    console.log(subject);
}

/*
js
ts 
py 
rb 
sw 
cpp
*/

for (const subject in subjects) {
    console.log(`Shortcut for ${subjects[subject]} is ${subject}`);
}
/*
Shortcut for JavaScript is js
Shortcut for TypeScript is ts
Shortcut for Python is py
Shortcut for Ruby is rb
Shortcut for Swift is sw
Shortcut for C++ is cpp
*/


//Remember: if we'll use for ...in loop with an array we will get the index value .
const programming = ["js", "ts", "java", "c++", "c", "py"];

for (const index in programming) {
    // console.log("index:", index);
    console.log(`${programming[index]} is present in ${index} index`);
}

/*
js is present in 0 index
ts is present in 1 index
java is present in 2 index
c++ is present in 3 index
c is present in 4 index
py is present in 5 index
*/


//using for ...in with Map object
//Remember: for ...in loop will not work with Map object it will execute but not give anything, bcoz map object is not itretable.

const map = new Map();

map.set('IN', 'India');
map.set('AUS', 'Australia');
map.set('NZ', 'New Zealand');
map.set('SA', 'South Africa');

console.log("MAP:", map)

for (const key in map) {
    console.log("Key:",key);
}