let score = 33;
console.log(typeof score); // => number

let stringScore = String(score);
console.log(stringScore);

let accountName = "House of Spirits";
console.log(typeof accountName);

let numberActName = Number(accountName);
console.log(numberActName) // => NaN

let marks = "33";
let NumberMarks = Number(marks);
console.log("Number marks:", NumberMarks);
console.log(typeof NumberMarks);

let mobileNumber = "33asd";
let digitalMobileNumber = Number(mobileNumber); // => number
console.log("mobileNumber:", digitalMobileNumber); // => NaN
console.log("Datatype of mobileNumber:", typeof digitalMobileNumber); // => number

let phoneNumber = null;
console.log(typeof phoneNumber); //=> object
console.log(Number(phoneNumber)); // => 0

const bool = true
const convertedBool = Number(bool);
console.log("Converted Bool:", convertedBool); // => 1
console.log(typeof convertedBool); // => number

let test = 1;
let test2 = Boolean(test);
console.log("Test_1:", test2); // => true
console.log(typeof test);  // =>  number

let emptyString = "";
let emptyString2 = Boolean(emptyString);
console.log("Tes_2:", emptyString2); // => false bcoz of empty sting
console.log(typeof emptyString2);  // =>  boolean 

let emptyString3 = "1asdf";
let emptyString4 = Boolean(emptyString3);
console.log("Test_3:", emptyString4); // => true 
console.log(typeof emptyString4);  // =>  string 

let schoolId = 12345;
let schoolIdString = String(schoolId); // => 12345
console.log(typeof schoolIdString) // => string

let value = 3;
let negValue = -value;
console.log("Negative Value: ", negValue);

let add, subtract, multiply, divide, power, mod;

add = 2 + 2;
subtract = 2 - 2;
multiply = 2 * 2;
divide = 2 / 2;
mod = 2 % 3;
power = 2 ** 3;

console.table({ add, subtract, multiply, divide, mod, power });

//We can add two strings using + operator they will get combined.

let str1 = "Hello";
let str2 = " World";
let str3 = str1 + str2;
console.log("str3: ", str3);

/* Complexity
1. if we will add any one string with any one number it will always combine.
2. in case of multiple number and string we need to check the side if first element is string all the 
elements will get combine, if first element is number numbers will get added up & the the elements will
combine.
*/

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2" + 3);
console.log(1 + 2 + "3");
console.log(1 + 3 - 1 * 6 / 4);

console.log(+true);
console.log(+false);
console.log(-true);
console.log(+"");

// 

let x,y,z;

x === y === z ==100; // not recommended in code
let gameCenter = 100;

console.log("Game center: ", ++gameCenter);
console.log("Game center: ", gameCenter++);
console.log("Game center: ", --gameCenter);
console.log("Game center: ", gameCenter--);
 /*
 Initially: 100
After ++gameCenter: 101
After gameCenter++: 102 (but the output is still 101 because it prints before incrementing)
After --gameCenter: 101
After gameCenter--: 100 (but the output is still 101 because it prints before decrementing)
*/



