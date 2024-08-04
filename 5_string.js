const shopName = "House of Spirits";
const since = 50;

console.log("Type of shopName: ", typeof shopName);

console.log("************************************************************************************");
console.log(shopName + since + " Year"); //Bad practise
console.log("************************************************************************************");
console.log(`The name is ${shopName} & we are serving since last ${since} years`); //Good practise
console.log("************************************************************************************");
console.log("3rd index of shopName: ", shopName[4])
console.log("************************************************************************************");

const newString = new String("Neeraj");
console.log("Type of newString: ", newString);
console.log("Index: ", newString[3]);
console.log("Prototype: ", newString.__proto__);
console.log("Index of r is:", newString.indexOf('r'));
console.log("Character at index 3 is:", newString.charAt(3));
console.log("newString in upper case:", newString.toUpperCase());
console.log("newString in lower case:", newString.toLowerCase());

const subString = newString.substring(1,4);
console.log("SubString: ",subString); // => leave the last number

const sliceString = newString.slice(1,3);
console.log("Slice string:", sliceString);

const sliceString1 = newString.slice(1,-4);
console.log("Slice string:", sliceString1);

//trim()
const trimData = "    sahsjdd "
console.log("Trim:",trimData);
console.log("Trimed Data:",trimData.trim());

//replace('value to replace', 'value to replace with')
const url = "https://youtube.com/come%20tomychannel";
console.log("Replace:",url.replace('%20', '_'));

//includes

console.log("Includes: ", url.includes('.com'));
console.log("Includes: ", url.includes('mo'));

//split
const splitData = "House-Of-Spirits";
console.log("Split:", splitData.split('-', 2));
console.log("Split:", splitData.split('-'));
console.log("Datatype of Split:", typeof splitData);



/*
STACK: Used for static memory allocation, such as function calls & local variables.
Memory is automatically managed & follows a LIFO order.

HEAP: Used for dynamic memory allocation, such as objects & arrays.
Memory is managed by the programmer or a garbage collector.
*/