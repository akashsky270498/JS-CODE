//if-else, switch cases are used to control the flow of our code.
const isUserLoggedIn = true;
const temprature = 41;

if (temprature <= 40) {
    console.log("The wheather is good"); // => non o/p
}

console.log("I will always get printed"); // => I will always get printed

if (temprature >= 40) {
    console.log("The wheather is hot"); // => The wheather is hot
} else {
    console.log("The wheather is cool");
}



//Comparision operator
// <, >, <=, >= , ==, !=, ===, !==


//Block Scope
const score = 200;

if (score < 201) {
    let power = "fly";
    console.log(`Your score is => ${score} you can: ${power}`) // => Your score is => 200 you can: fly
}
// console.log(`Your score is => ${score} you can: ${power}`) //Reference Error

/*
Note: In place of let I can use const but not var if I'll use var it will act as global scope and below line
will also get printed.
*/

const balance = 1000;
if (balance > 900) console.log("True"), console.log("False"); // => bad practise

//Nested if else
const accountBalance = 2000;

if (accountBalance < 720) {
    console.log(`Balance is less then: ${accountBalance}`);
}else if (accountBalance < 900) {
    console.log(`Balance is less then: ${accountBalance}`);
}else if (accountBalance < 1200) {
    console.log(`Balance is less then: ${accountBalance}`);
} else {
    console.log(`Balance is equal to: ${accountBalance}`);
}


const isUserLogged = true;
const debitCard = true;
const loggedInFromGoogle = true;
const loggedINFromEmail = false;

if (isUserLogged && debitCard) {
    console.log("Valid user");
}

if (loggedINFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}

