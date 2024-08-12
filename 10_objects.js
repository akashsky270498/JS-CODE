//Singleton: When we create object with constructor then it is a singleton object.
//Object.create: This line is used to create object like constructor (singleton)
// Other type is literal object.


//Object Literals:

const newSymbol = Symbol("Symbol Data");

console.log("Type of newSymbol", newSymbol);
const jsUser = {
    name: "Sreejesh Singh",
    "address": "Park residency, Delhi, IN",
    newSymbol: "New Symbol",
    [newSymbol]: "Old Symbol", // here we are using it as symbol
    phoneNumber: 9876543210,
    location: "Delhi",
    email: "admin@gmail.com",
    age: 19
}

//by using below two methods we can access object elements.
console.log("1st method: ", jsUser.name); // => Sreejesh Singh
// console.log("2nd Method:", jsUser[phoneNumber]); // => error: if keys datatype is string pass it as string.
console.log("3rd Method:", jsUser["phoneNumber"]); // => 9876543210
console.log("4th Method:", jsUser["address"]); // => Park residency, Delhi, IN
console.log("Symbol without sqr bracket:", jsUser.newSymbol); // => New Symbol
console.log("Symbol without sqr bracket datatype:", typeof jsUser.newSymbol); // => string
console.log("Symbol:", jsUser["newSymbol"]); // => New Symbol
console.log("Symbol without sqr bracket:", jsUser[newSymbol]); // => Old Symbol (correct way to access symbol)
 