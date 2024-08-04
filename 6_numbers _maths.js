// ********************************* Numbers *********************************
const score = 400;
console.log("Score is:",score);
console.log("Type of Score is:",typeof score);

const number = new Number(500);
console.log("Number is:",number);
console.log("Type of number is:", typeof number);

console.log("Convert the number in string:", number.toString().length); // 3

//toFixed will fix the number of digit we will pass after decimal
console.log("toFixed length after decimal:", number.toFixed(2)); //500.00

//toPrecision will give the precise value 

const otherNumber = 1234.34;
console.log("Precise Value:",otherNumber.toPrecision(2)); //1.2e+3

const anotherNumber = 123.45;
console.log("Precise Value:", anotherNumber.toPrecision(6)); //123.450

const precise = 1234.567;
console.log(precise.toPrecision(4)); //1235 

const hunderds = 10000000000000;
console.log("By default US std. :",hunderds.toLocaleString()); //1,00,00,00,00,00,000
console.log("Indian std. :",hunderds.toLocaleString('en-IN')); //1,00,00,00,00,00,000

// ************************** MATH *******************************************

console.log("Maths:",Math); // Math object();
/*Math.abs => convert the given value in absolute value, means convert the negative value to +ve but
 +ve value to -ve, +ve will remain +ve */
console.log(Math.abs(-483)); // 483 
/* Math.round() will roundoff the value.*/
console.log("Greater than 5 means bigger side:",Math.round(4.6));
console.log("Lesser than 5 means smaller side:",Math.round(4.2));
console.log("Ceil means bigger side:",Math.ceil(4.2));
console.log("Floor means smaller side:",Math.floor(4.9));

//Math.random() will generate random numbers between 0 to 1.
console.log(Math.random());
console.log("To generate greater than 1: ",(Math.random() * 10)); 
//but to cut the case of 0.0012 like we add 1
console.log("To generate greater than 1: ",(Math.random() * 10) + 1); 
console.log("To generate random number with floor value means single digit: ",(Math.floor(Math.random() * 10) + 1));

//Formula to generate random number between a specific range
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);







