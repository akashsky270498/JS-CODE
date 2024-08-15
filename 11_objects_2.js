const singleTon = new Object();
console.log(singleTon);

const literals = {}
console.log(literals);

literals.id = "tin1234";
literals.name = "Ashish";
literals.isLoggedIn = false;

console.log(literals);

const nestedObj = {
    fullname:  {
        userFullname: {
            firstName: "Ashish",
            lastName: "Singh"
        }
    }
}

console.log(nestedObj); // => {fullname: { userFullname: { firstName: 'Ashish', lastName: 'Singh' } }}
console.log(nestedObj.fullname); // => { userFullname: { firstName: 'Ashish', lastName: 'Singh' } }
console.log(nestedObj.fullname.userFullname.firstName); // => Ashish

const obj1 = { name: "first", class: "sixth" }
const obj2 = { name: "second", class: "seventh" }
const obj3 = { name: "third", class: "eighth" }
const obj4 = { name: "fourth", class: "ninth" }

//Combining object
const obj5 = { obj1, obj2, obj3, obj4 }
console.log(obj5)
/*
{
  obj1: { name: 'first', class: 'sixth' },
  obj2: { name: 'second', class: 'seventh' },
  obj3: { name: 'third', class: 'eighth' },
  obj4: { name: 'fourth', class: 'ninth' }
}
*/

const obj6 = Object.assign({},obj1, obj2)
/*
Object.assign({}, obj1, obj2) Explanation:
Object.assign copies the properties from the source objects (obj1, obj2) into the target object (an empty object {} in this case).
Since both obj1 and obj2 have the same keys (name and class), the values from obj2 overwrite those from obj1 in the target object.
*/
console.log(obj6) // => { name: 'second', class: 'seventh' }
const obj8 = { ...obj1, ...obj2, ...obj3, ...obj4}
console.log("obj8",obj8) // => { name: 'fourth', class: 'ninth' }

obj11 = { 1: "a", 2: "b", 3: "c"};
obj12 = { 4: "d", 5: "e", 6: "f"};
const obj15 = {obj11, obj12}
console.log(obj15) 
/*
{
  obj11: { '1': 'a', '2': 'b', '3': 'c' },
  obj12: { '4': 'd', '5': 'e', '6': 'f' }
}
*/

const obj13 = Object.assign(obj11, obj12);
console.log(obj13); // => { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


//All the data of obj12 will get stored in obj11
console.log("dfghjkl;", obj11) // =>{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const obj14 = Object.assign({}, obj11, obj12);
console.log(obj14); // => { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const obj16 = { ...obj11, ...obj12}
console.log(obj16) // => { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const obj18 = { ...obj11, obj12}
console.log(obj18)
/*
{
  '1': 'a',
  '2': 'b',
  '3': 'c',
  '4': 'd',
  '5': 'e',
  '6': 'f',
  obj12: { '4': 'd', '5': 'e', '6': 'f' }
}
*/

const students = [
    { name: "Alice", age: 20, major: "Computer Science" },
    { name: "Bob", age: 22, major: "Mathematics" },
    { name: "Charlie", age: 19, major: "Physics" },
    { name: "Diana", age: 21, major: "Biology" }
];

console.log(students[0].name); // => Alice
console.log(students[2].major); // => Physics


  
  

console.log(Object.keys(literals)); // => [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(literals)); // => [ 'tin1234', 'Ashish', false ]
console.log(Object.entries(literals)); // => [ [ 'id', 'tin1234' ], [ 'name', 'Ashish' ], [ 'isLoggedIn', false ] ]
console.log(literals.hasOwnProperty('isLoggedIn')); // => true
console.log(literals.hasOwnProperty('name')); // => true
console.log(literals.hasOwnProperty('age')); // => false

