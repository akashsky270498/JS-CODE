//while-loop

let i = 0; // initialization

while (i <= 5) {
    console.log(`Value of i = ${i}`);
    i = i + 1; // i++ increment
}

/*
Value of i = 0
Value of i = 1
Value of i = 2
Value of i = 3
Value of i = 4
Value of i = 5
*/

let myArray = ["Nambi", "Tambi", "Mark", "Nicholes"];

let index = 0;

while (index < myArray.length) {
    const elements = myArray[index];
    console.log(elements);
    index++;
}
/*
Nambi
Tambi
Mark
Nicholes
*/


//do-while loop: here the value will execute atleast for the first time.

let j = 1;

do{
    console.log(`The value of j = ${j}`);
    j = j+1
}while (j <= 4);

/*
The value of j = 1
The value of j = 2
The value of j = 3
The value of j = 4
*/


let k = 6;

do{
    console.log(`The value of k = ${k}`); // =>  The value of k = 6 {bcoz the condition fails}
    k = k+1;
}while(k < 4)


