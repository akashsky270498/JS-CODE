console.log(2 > 3); // => false
console.log(2 < 3); // => true
console.log(2 == 3); // => false
console.log(2 != 3); // => true
console.log(2 >= 3); // => false
console.log(2 <= 3); // => true


console.log("2" > 1); //  => true bcoz bydefault string is getting converted into number.
console.log("02" > 1); // => true

console.log(null > 0); // => false
console.log(null < 0); // => false
console.log(null >= 0); // => true
console.log(null <= 0); // => true
 /*
- The reason is that the equality check (==) and comparisions (<,>,<=,>=) works differently in JS.
- Comaprision converts null to a number, treating it as 0.
- Thats why null <= 0 => true & null > 0 => false
*/

console.log(undefined > 0); // => false
console.log(undefined < 0); // => false
console.log(undefined >= 0); // => false
console.log(undefined <= 0); // => false

console.log(undefined > 1); // => false
console.log(undefined < 1); // => false
console.log(undefined >= 1); // => false
console.log(undefined <= 1); // => false


console.log(undefined > undefined); // => false
console.log(undefined < undefined); // => false
console.log(undefined >= undefined); // => false
console.log(undefined <= undefined); // => false
console.log(undefined == undefined); // => true
console.log(undefined != undefined); // => false


//Strict check : here it will also check the datatype.

console.log(2 === "2"); // => false
console.log("2" === "2"); // => true
