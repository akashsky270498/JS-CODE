/*
Array: Array is a collection of multiple items stored in a single varibale name.
- In JS Array's are resizable & can also contain mixed dataype.
- Drawback of array is, we cant access the element directly by passing thier name.
- In JS Array indexing starts from 0 as other PL.
- In JS Array always follow Shallow copy, Shallow copy means copy whose properties share the same refrences.
*/
const arr = [1, 2, 3, 4, 5, "Array", true];
console.log("Length of an arr: ", arr.length); // => 7
console.log("******************************************************************************");

//PUSH: push method is use to add last element in an array.
console.log("Using PUSH method: ", arr.push(10)); // => 8
console.log("After PUSH method: ", arr); // =>  [ 1, 2, 3, 4, 5, 'Array', true, 10 ]
console.log("******************************************************************************");

//POP: pop method is used to remove last element from an array.
console.log("Using POP method: ", arr.pop()); // => 10
console.log("After POP method: ", arr); // => [ 1, 2, 3, 4, 5, 'Array', true ]
console.log("******************************************************************************");

//UNSHIFT: unshift method is used to add the element in the beginning of the array or first element of an array.
console.log("Using UNSHIFT method: ", arr.unshift(2));
console.log("After UNSHIFT method: ", arr); // => [ 2, 1, 2, 3, 4, 5, 'Array', true ]
console.log("******************************************************************************");

//SHIFT: shift method is used to remove first element from the array or array from the beginning of an array.
console.log("Using SHIFT method: ", arr.shift()); // => 1
console.log("After SHIFT method: ", arr); // => [ 1, 2, 3, 4, 5, 'Array', true ] 
console.log("******************************************************************************");

// SLICE: slice method is used to obtain the elements from the given range except the last element 
// (element from last index). Also the original array remains unchanged.
console.log("Using SLICE method: ", arr.slice(2, 6)); // =>  [ 3, 4, 5, 'Array' ]
console.log("After SLICE method: ", arr); // => [ 1, 2, 3, 4, 5, 'Array', true ]  
console.log("******************************************************************************");

//SPLICE: splice method is used to obtain all the elements from the given range from start index to end index.
//Also it modify the original array. The obtained elements from an array opted out permanently from original array.
console.log("Using SPLICE method: ", arr.splice(2, 6)); // => [ 3, 4, 5, 'Array', true ]
console.log("After SPLICE method: ", arr); // =>   [ 1, 2 ]
console.log("******************************************************************************");

const newArr = [1, 2, 3, 56, 7, 8, 99, "Yes", false, "No"];
console.log("Checking the presence of an element: ", newArr.includes("Yes")); // => true
console.log("Checking the presence of an element which is not present in an array: ", newArr.includes(0)); // => false
console.log("******************************************************************************");

console.log("Fetching the index of an element: ", newArr.indexOf(99)); // => 6
console.log("Fetching the index of an element which is not present in an array: ", newArr.indexOf(9)); // => -1
const arr_2 = new Array(1, 2, 34, 543, 2, 4, 45, 4);
console.log("******************************************************************************");

console.log("Arr_2: ", arr_2); // => [1,2,34,543,2,4,45,4]
console.log("Join:", arr_2.join()); // => 1,2,34,543,2,4,45,4
console.log("Join:", typeof arr_2); // => object
console.log("Join:", typeof arr_2.join()); // => string


// Example array
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log("Original Array: ", fruits);
console.log("************************************************************************************");

// 1. Removing elements using splice
// Remove 1 element from index 2 (removes "Mango")
const removedItems = fruits.splice(2, 1);
console.log("After removing 1 element (Mango) from index 2: ", fruits); // => [ 'Apple', 'Banana', 'Orange', 'Grapes' ]
console.log("Removed items: ", removedItems); // => Removed items:  [ 'Mango' ]
console.log("************************************************************************************");

// 2. Adding elements using splice
// Add "Pineapple" at index 1  
fruits.splice(1, 0, "pineapple");
console.log("After adding pineapple at index 1: ", fruits); // =>  [ 'Apple', 'pineapple', 'Banana', 'Orange', 'Grapes' ]
console.log("************************************************************************************");

// 3. Replacing elements using splice
// Replace 2 elements starting from index 2 with "Kiwi" and "Peach"
fruits.splice(2, 2, "Kiwi", "Peach");
console.log("After Replacing 2 elements (Banana, Orange) starting from index 2: ", fruits); // =>  [ 'Apple', 'pineapple', 'Kiwi', 'Peach', 'Grapes' ]
console.log("************************************************************************************");

// 4. Removing elements and inserting new elements
// Remove 2 elements from index 1 and add "Strawberry" and "Blueberry"
fruits.splice(1, 2, "Strawberry", "Blueberry");
console.log("After Removing 2 elements and adding Strawberry and Blueberry: ", fruits); // =>  [ 'Apple', 'Strawberry', 'Blueberry', 'Peach', 'Grapes' ]
console.log("************************************************************************************");

// 5. Removing all elements from a specific index
// Remove all elements from index 2 onwards
// const remainingItems = fruits.splice(2);
const remainingItems = fruits.splice(2);
console.log("After Removing all elements from index 2 onwards: ", fruits); // ["Apple", "Strawberry"]
console.log("Remaining Items after removal: ", remainingItems); //  [ 'Blueberry', 'Peach', 'Grapes' ]
console.log("************************************************************************************");

// 6. Adding elements at the end of the array
// Adding "Lemon" at the end
fruits.splice(fruits.length, 0, "Lemon");
console.log("After Adding Lemon at the end: ", fruits); // ["Apple", "Strawberry", "Lemon"]
console.log("************************************************************************************");

// 7. Adding elements at the beginning of the array
// Adding "Watermelon" at the start
fruits.splice(0, 0, "Water lemon");
console.log("After Adding Watermelon at the beginning: ", fruits); //  [ 'Water lemon', 'Apple', 'Strawberry', 'Lemon' ]
console.log("************************************************************************************");

// 8. Replacing all elements with new elements
// Replacing entire array contents with "Cherry", "Plum"
fruits.splice(0, fruits.length, "Cherry", "Plum");
console.log("After Replacing all elements with Cherry and Plum: ", fruits); // ["Cherry", "Plum"]
console.log("************************************************************************************");

// 9. Removing the last element using splice
// Remove 1 element from the end of the array
fruits.splice(1, fruits.length);
// fruits.splice(1, -1)
console.log("After Removing last element (Plum): ", fruits); // ["Cherry"]
console.log("************************************************************************************");

// 10. Remove element using a negative index
// Negative index counts back from the end
fruits.push("Orange", "Apple", "Banana");
console.log("Array before negative index removal: ", fruits); // ["Cherry", "Orange", "Apple", "Banana"]
fruits.splice(-2, 1); // Remove 1 element starting from 2nd last element
console.log("After Removing 1 element from index -2: ", fruits); // ["Cherry", "Orange", "Banana"]
console.log("************************************************************************************");
