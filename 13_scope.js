var c = 300;

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a) // => a is not defined.
// console.log(b) // => b is not defined.
console.log(c) // => 30 : latest declare variable will come.
// **************************************************************************
var c = 100; // global socpe
let a = 200;
const e = 300

if (true) {
    let a = 10;
    const b = 20;  //block scope
    var c = 30;
    console.table({ a, b, c }); // => 10,20,30
}

console.table({ a, c, e }) // => 200, 30, 300


//Block Scope: The scope of variable will  be available within the block scope only.
//Global Scope: The scope of variable will be available outside block also.



/* Note: Child function can access the variables declare inside parent function but parent function cannot access
the variables declare inside child function*/

function one() {
    const username = "Pankaj";

    function two() {
        const age = 24;
        console.log("Username: ", username); // => Username:  Pankaj
    }
    // console.log(age); 
    /* if i will not comment out the above line we will get error age is not defined & two() will not get called.*/
    two();
}

one();

// ************************************************************************************************

if (true) {
    const username = "Ishant";
    if (username === "Ishant") {
        const website = " Zomato";
        console.log(username + website); // => Ishant Zomato
    }
    // console.log(website); // => ReferenceError: website is not defined
}
// console.log(username); // => ReferenceError: username is not defined


// ********************* Special case ******************************

// normal function 

console.log(addOne(5)); // => 6
function addOne(num) {
    return num + 1;
}

console.log(addOne(5)); // => 6


//function with expression

console.log(addTwo(5)); // => ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num +2;
}

console.log(addTwo(5)); // => 7


//Note: with expression it is not possible to call function before its function defination.