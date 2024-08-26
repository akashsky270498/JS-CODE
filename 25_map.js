const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = arr.map((data) => data + 10);
console.log("new num:", newNum) // => new num: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const mulNum = arr.map((val) => {
    return val * 10;
})

console.log(mulNum); // => [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

//mixted functions
const mixedArray = arr
    .map((num) => (num * 10))
    .map((num) => { return num * 2 })
    .filter((num) => { return num >= 50 })

console.log("Log:", mixedArray) // => Log: [60,  80, 100, 120, 140, 160, 180, 200]