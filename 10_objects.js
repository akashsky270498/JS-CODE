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


//We can access object value using dot notation & objName["keyName"].

//We can change the value of using dot notation
jsUser.email = "admin@chatgpt.com";

console.log("jsUser", jsUser);

/*
jsUser {
  name: 'Sreejesh Singh',
  address: 'Park residency, Delhi, IN',
  newSymbol: 'New Symbol',
  phoneNumber: 9876543210,
  location: 'Delhi',
  email: 'admin@chatgpt.com',
  age: 19,
  [Symbol(Symbol Data)]: 'Old Symbol'
}
*/

//if we will freeze the object using objectName.object(key) then further changes will not be propogated in the 
// Object. 
Object.freeze(jsUser);
jsUser.email = "admin@paypal.com";

console.log("jsUser after freezing:", jsUser);
/*
jsUser after freezing: {
  name: 'Sreejesh Singh',
  address: 'Park residency, Delhi, IN',
  newSymbol: 'New Symbol',
  phoneNumber: 9876543210,
  location: 'Delhi',
  email: 'admin@chatgpt.com',
  age: 19,
  [Symbol(Symbol Data)]: 'Old Symbol'
} 
*/


//************************************************************** 
const jsUser1 = {
    name: "House of Spirits",
    "address": "Park residency, Delhi, IN",
    newSymbol: "New Symbol",
    [newSymbol]: "Old Symbol", // here we are using it as symbol
    phoneNumber: 9876543210,
    location: "Delhi",
    email: "admin@gmail.com",
    age: 19
}


//We can also add function inside objects in JS with a variable name.

jsUser1.greeting = function () {
    console.log("Welcome to JS");
}


//below: here the refrence is given but the function is not yet executed.
console.log(jsUser1.greeting); // => [Function (anonymous)]
console.log(jsUser1.greeting()); // => Welcome to JS


// Note: this is a keyword that refers to a context in which a function is executed.
/* In case of normal object (object method) with this keyword you can extract the value present inside that 
object with this.keyName.*/

jsUser1.greetingTWo = function() {
    console.log(`Welcome to JS world, ${this.name}`); 
}

console.log(jsUser1.greetingTWo()); // => Welcome to JS world, House of Spirits





