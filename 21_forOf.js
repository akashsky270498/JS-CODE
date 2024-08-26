//for of loop specially designed for an Array or Object.
// for (const iterator of object) {

// }

const arr = [1, 2, 4, 65, 67, 8, 9, 0, 12, 35];

for (let i = 0; i < arr.length; i++) {
    console.log("index: ", + i + " values:", arr[i]);
}

// using for of 
for (const i of arr) {
    console.log("values", i);
}

/*
values 1
values 2
values 4
values 65
values 67
values 8
values 9
values 0
values 12
values 35
*/

// not only in an Array but we can also use it in String

const greeting = "Hello World";

for (const greet of greeting) {
    console.log(`Each character is: ${greet}`);
}

/*
Each character is: H
Each character is: e
Each character is: l
Each character is: l
Each character is: o
Each character is:
Each character is: W
Each character is: o
Each character is: r
Each character is: l
Each character is: d
*/


// map: map is also an object in JS which holds key-value pairs and remember the original insertion order of the keys.
// Also map only unique key value 

const map = new Map();

map.set('IN', 'India');
map.set('AUS', 'Australia');
map.set('NZ', 'New Zealand');
map.set('SA', 'South Africa');

console.log("MAP:", map)
/*
MAP: Map(4) {
  'IN' => 'India',
  'AUS' => 'Australia',
  'NZ' => 'New Zealand',
  'SA' => 'South Africa'
}
*/

// using for...of in map

for (const key of map) {
    console.log(key);
}

for (const value of map) {
    console.log(value);
}
/*
[ 'IN', 'India' ]
[ 'AUS', 'Australia' ]
[ 'NZ', 'New Zealand' ]
[ 'SA', 'South Africa' ]
*/

//for more clariy destructure the map like below
for (const [key, value] of map) {
    console.log(key, ":-", value);
}
/*
IN :- India
AUS :- Australia
NZ :- New Zealand
SA :- South Africa
*/

//for..of will not work in object.

const myObject = { "game1": "Cricket", "game2": "Football", "game3": "Tennis" };

// for (const [game, gameName] of myObject) {
//     console.log(game, ":-", gameName);  //TypeError: myObject is not iterable
// }