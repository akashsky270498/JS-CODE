/*
this keyword: "this" keyword will always tell you about the current context
*/

const user = {
    username: "Daniel",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welocme to Website`);
        console.log(this);
        
    }
}

user.welcomeMessage(); //till here the current context is different: Daniel, Welocme to Website
//now we are changing the username
user.username = "Tony"; //here we have changed the current context: Tony, Welocme to Website
user.welcomeMessage();

/*
here we are inside the node environment so here this will refer to an empty object as nothing is inside global
When we do console.log(this) in browser we will number of values like window object & all.
*/

/*
What is the global object inside the browser ??
Ans: Window object
*/

console.log(this); // => {}

// inside objedt if we wil do console.log(this) we will get
/*
Daniel, Welocme to Website
{
  username: 'Daniel',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
Tony, Welocme to Website
{
  username: 'Tony',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/


//now lets use this keyword inside the function
function one() {
    const user = "Ricky";
    console.log(this)
}
one();

/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
}
*/

// if we try to extract some values that is defined inside the function using this keyword we will get undefined

function two () {
    const user = "Andrew";
    console.log(this.user); // => undefined
}

two()

const three = function() {
    const price = 999;
    console.log(this.price); // => undefined
}
three();


//Arrow function 

const four = () => {
    const age = 18;
    console.log(this); // => {}, in case of arrow function we'll get empty objec but in case 
                      // of classic function we will get number of values.
}
four()


const five = () => {
    const address = "Chennai";
    console.log(this.address); // => undefined
}
five();


//basic arrow function
const mulitply = (num1, num2)  => {
    return num1 * num2;
}

console.log(mulitply(3,5)); // => 15

//implicit return here we dont have to write the return keyword.

const addTwoNumber = (num1, num2) => num1 + num2;

console.log(addTwoNumber(10,20)); // => 30


// if we use {} braces we have to write return keyword if we use() bracket we dont have to use return keyword.
const subtract = (num1, num2) => ( num2 - num1)
console.log(subtract(10,20)); // 20

//what if we want to return an object ??
const addTwo = (num1, num2) => { username: "Ravindra" };
console.log(addTwo(1,2)); // => undefined

const subtractTwo = (n1, n2) => ({ username: "Jadeja" }) ;
console.log(subtractTwo(2,3)); // => { username: 'Jadeja' }