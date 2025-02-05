console.log(Math.PI) // => 3.141592653589793
Math.PI = 5.67;
console.log(Math.PI) // => 3.141592653589793

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

// we can several operation in user-defined object also 
const India = {
    state: "Telangana",
    city: "Hyderabad",
    street: "Gacchibowli",

    orderFood: function () {
        console.log("No order accepted");
    }
}

console.log(Object.getOwnPropertyDescriptor(India, "state"));
/*
{
  value: 'Telangana',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

Object.defineProperty(India, "state", {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(India, "state"));
/*
{
  value: 'Telangana',
  writable: false,
  enumerable: false,
  configurable: true
}

*/

// for (const [key, value] of India) {
//     if (typeof value !== 'function') {
//         console.log(`${key} => ${value}`);
//     }
// }

for (const [key, value] of Object.entries(India)) {
    if (typeof value !== 'function') {
        console.log(`${key} => ${value}`);
    }
}
// for (const key in India) {
//     if (typeof India[key] !== 'function') {
//         console.log(`${key} => ${India[key]}`);
//     }
// }

/*
city => Hyderabad
street => Gacchibowli
*/