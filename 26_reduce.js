const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//reduce function
const sumOfArray = arr.reduce(function (acc, currval) {
    console.log(`acc = ${acc} & currval = ${currval}`);
    return acc + currval;
}, 0)
console.log("Sum of an Array: ", sumOfArray);


const total = arr.reduce((acc, currval) => {
    return acc + currval;
}, 0);
console.log("Total: ", total);

//withour scope
const sum = arr.reduce((acc, currval) => (acc + currval), 0)
console.log("Sum: ", sum);

const shoppingCart = [
    { name: "Apple", quantity: 3, price: 0.5 },
    { name: "Banana", quantity: 2, price: 0.3 },
    { name: "Milk", quantity: 1, price: 1.2 },
    { name: "Bread", quantity: 2, price: 1.5 },
    { name: "Eggs", quantity: 12, price: 0.1 },
    { name: "Orange Juice", quantity: 1, price: 2.5 },
    { name: "Chicken Breast", quantity: 1, price: 5.0 },
    { name: "Rice", quantity: 2, price: 0.8 },
    { name: "Pasta", quantity: 3, price: 1.0 },
    { name: "Tomato", quantity: 5, price: 0.4 }
];


const priceToPay = shoppingCart.reduce((acc, item) => (acc + item.price), 0);
const mostExpensiveItem = shoppingCart.reduce((prev, current) => (prev.price > current.price) ? prev : current);
console.log(mostExpensiveItem);


console.log(priceToPay)
