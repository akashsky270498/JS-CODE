function sayMyName() {
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("T");
}

sayMyName // => function refrence;
sayMyName() // => function Execution 
/*
T
E
S
T
*/

function addTwoNumbers(number1, number2) { 
    console.log(number1 + number2); // => 30
}

addTwoNumbers(10,20); // => 30
addTwoNumbers(10,"20");  // => 1020
addTwoNumbers(10,null);  // => 10
const result = addTwoNumbers(100,300); // => 400
console.log("Result: ", result) // => undefined: bcoz we are not returning anything from function.


//function defination
function addThereeNumbers(number1, number2, number3) {
    // const result = number1 + number2 + number3;
    // return result;
    return number1 + number2 + number3;
}

const result1 = addThereeNumbers(2,3,4);
console.log("Result1: ",result1)

function userLoggedin(username) {
    return `${username} just logged in.`
}

const result2 = userLoggedin() 
console.log(result2)// => undefined just logged in.
const result3 = userLoggedin("Sam") 
console.log(result3);// => Sam just logged in.

function isUserLoggedIn(username) {
    if (username === undefined) {
        console.log("Please enter the username");
        return; //so that function execution stops here
    }
    return `${username} just logged in.`
}

const result4 = isUserLoggedIn(); // => Please enter the username
console.log(result4);

const result5 = isUserLoggedIn("Ricky"); // => Please enter the username
console.log(result5);

function isUserLoggedIns(username = "Admin") { // => default value will come if we will not pass anything in args.
    if (username === undefined) {
        console.log("Please enter the username");
        return; //so that function execution stops here
    }
    return `${username} just logged in.`
}

const result6 = isUserLoggedIns();
const result7 = isUserLoggedIns("Adam");
console.log(result6); // => Admin just logged in.
console.log(result7) // => Adam just logged in.

//Functions
function calculateCartPrice(num1) { 
    return num1;
}

console.log(calculateCartPrice(100,200,300,400)); // => 100;

//Using rest operator: which is used to hold the multiple number of args coming while function call in the form
// of an Array.
function calculateCartPrice1(...num1) { 1
    return num1;
}

console.log(calculateCartPrice1(100,200,300,400)); // => [ 100, 200, 300, 400 ]

function calculateCartPrice2(val1, val2, ...num1) { 
    console.log(val1, val2) // => 100, 200
    return num1;
}

console.log(calculateCartPrice2(100,200,300,400)); // [ 300, 400 ] : val1=> 100, val2=> 200

//function with object

const user = {
    name: "Angad",
    class: "ix"
}

//Note: In function we need to pass the objectName as params always pass generic name not the objName.

function handleObject(anyObject) {
    return `The user name is: ${anyObject.name} & the class is: ${anyObject.class} & the city is: ${anyObject.city}.`
}

console.log(handleObject(user)); //while calling the function pass the object name.
//The user name is: Angad & the class is: ix & the city is: undefined.

//We can also pas the object directly while calling the function

console.log(handleObject({
    name: "Aman",
    city: "Ahemdabad",
    class: "viii"
}))  // => The user name is: Aman & the class is: viii & the city is: Ahemdabad.


//Function with Array

const myArray = [100,200,300,400,500];

function returnArrayValue(anyArray) {
    return anyArray[4];
}

console.log(returnArrayValue(myArray)); // => 200
//Direct array also we can pass as an args while calling the function
console.log(returnArrayValue([1,2,34,"A",true])); // => true

