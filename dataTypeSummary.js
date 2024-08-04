// Primitive Datatype.
/*
1. String.
2. Number.
3. BigInt.
4. Boolean.
5. Symbol. 
6. null.
7. undefined
*/

//Non - Primitive Datatype
/*
1. Function.
2. Array.
3. Object.
*/


const number = 100;
const bigNumber = 10000.2;
const bigIntNumber = 123456789992345456789n
console.log("TYPE:", typeof bigIntNumber);

const stringValue = "House of Spirits";

const isUserLoggedIn = true;
const outSideTemp = null;
let marks = undefined;
let marks1;

const symbol1 = Symbol("123456");
const symbol2 = Symbol("123456");
console.log("is symbols are equal ?: ", symbol1 === symbol2); // => false

//Non-Primitive (Reference)

const arr = [1, "Array", true, 3.4,];

const obj = {
    "name": "Object",
    "age": 12,
    "isTrue": false
}

const myFunction = function () {
    console.log("Printed");
}

myFunction()


console.log(typeof arr);
console.log(typeof obj);
console.log(typeof myFunction);

//********************************************************************************//
//******************HEAP-STACK**********************//

/* 
- We have two types of memory in JS:
1. Stack
    - Stack is used in Primitive datatype. 
    - Primitive datatype will give you the copy of variable (copy of value).
2. Heap
    - Heap memory is used in Non-primitive datatype.
    - Non primitive datatype will give you the original reference.
*/

let newName = "House of Spirits";

let anotherName = "The Castle";
anotherName = "Missigun";

console.log("Another name:",anotherName);
console.log("Name:",newName);


//HEAP

let userOne = {
    "name": "New Object",
    "age": 27
};

let userTwo = userOne;

console.log("User 1:",userOne);
console.log("User 2:",userTwo);

userTwo.name = "Old Object";

console.log("user 1 after heap: ",userOne);
console.log("user 2 after heap: ",userTwo);
