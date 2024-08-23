// const userEmail = "alex@youtube.com"; // => Got the email
// const userEmail = "" // => Didn't got the email
const userEmail = [] // => Got the email

if (userEmail) {
    console.log("Got the email");
} else {
    console.log("Didn't got the email");
}


/*
Falsy Values: false, 0, NaN, undefined, null, BigInt 0n, -0, ""
Truthy values: [], {}, "0", "false", function() {}, " " (anything under string)
*/

//How to check empty array
if (userEmail.length === 0) {
    console.log("Array is Empty");
}

const userEmailObject = {};
//How to check object
if (Object.keys(userEmailObject).length === 0) {
    console.log("Object is Empty");
}


console.log(false == 0); // => true
console.log("" == 0); // true
console.log("" == false); // true
console.log("" == null); // false

/*
Nullish Coalescing Operator (??): null, undefined
The whole story of Nullish Coalescing Operator depends uon null & undefined
This is used for maintaining the code flow our code should not get disturbed bcoz of null or undefined sometime two values we use
to get either any value with null or value with undefined so with both the values my code can get balanced for this we use NCO. 
*/

let val1 = 5 ?? 10;  // => 5
let val2 = null ?? 100;  // => 100
let val3 = undefined ?? 1000;  // =>  1000

let val4 = null ?? 10 ?? 20;  // => 10

console.table({ val1, val2, val3, val4 })

// Ternary Operator
// condition ? true : false;

const iceCoffee = 10;

iceCoffee <= 20 ? console.log(`Ice Coffee price is > ${iceCoffee}`) : console.log(`Ice Coffee price is < ${iceCoffee}`)
