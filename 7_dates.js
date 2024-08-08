//Date is of object type in JS.
let myDate = new Date();
console.log("Date:", myDate); // => 2024-08-08T08:43:40.236Z
console.log(typeof myDate); // => object

console.log("To Stirng: ",myDate.toString());// => Thu Aug 08 2024 14:16:18 GMT+0530 (India Standard Time)
console.log("To Date Stirng: ",myDate.toDateString());// => Thu Aug 08 2024
console.log("To ISO Stirng: ",myDate.toISOString());// => 2024-08-08T08:46:18.727Z
console.log("To Locale Stirng: ",myDate.toLocaleString());// => 8/8/2024, 2:16:18 pm
console.log("To LocaleDate Stirng: ",myDate.toLocaleDateString());// => 8/8/2024
console.log("To LocaleTime Stirng: ",myDate.toLocaleTimeString());// => 2:16:18 pm

//Month in JS always starts with 0 (0 => January)

let newDate = new Date(2025, 3, 27); // => format will always be (YYYY, MM, DD);
console.log("New Date: ",newDate.toDateString());// => Sun Apr 27 2025

let nayaDate = new Date(2021, 1, 11, 5, 30, 20)
console.log("Naya Date:", nayaDate.toLocaleString()); // => 11/2/2021, 5:30:20 am 


//Date.now() will always results in miliseconds
const timeStamp = Date.now();
console.log("Date.now will give timestamp:", timeStamp); // => 1723107570549

let myCreatedDate = new Date("01-14-2023"); // => 2023-01-13T18:30:00.000Z
console.log("My Created Date: ", myCreatedDate);
console.log(myCreatedDate.getTime()); // => 1673634600000

//Convert the miliseconds into seconds
console.log(Date.now()/1000); // => 1723108330.002
console.log("Miliseconds to seconds:",Math.floor(Date.now()/1000)); // => 1723108354

let oneNewDate = new Date();
console.log("One new Date: ",oneNewDate.toDateString()); // =>  Thu Aug 08 2024
console.log("Month: ", oneNewDate.getMonth()); // => 7 (month in JS starts with 0)
console.log("Day: ", oneNewDate.getDay()); // => 4 (Thrusday)


oneNewDate.toLocaleString('default', {
    weekday: "long",
    timeZone: ""
})








 