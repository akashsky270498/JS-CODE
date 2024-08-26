const fruitsItems = ["Apple", "Banana", "Kiwi", "Orange", "Avocado", "Grapes", "Water melon"];


// Note:  forEach loop never returns anything

const fruits = fruitsItems.forEach((items) => {
    console.log(items);
    return items // => undefined
})

console.log(fruits)
/*
Apple
Banana
Kiwi
Orange
Avocado
Grapes
Water melon
undefined
*/

/*
filter function => filter will return anything means we have to use return keyword compulsary if we use scope means {} braces.
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = arr.filter((values) => values > 5);
console.log("New Array:", newArr); // => New Array: [ 6, 7, 8, 9, 10 ]

//we need to mention return keyword

const newArr1 = arr.filter((val) => {
    // val <= 5; in this case we will get o/p as []
    return val <= 5;
})

console.log("New Array 1: ", newArr1) // => New Array 1:  [ 1, 2, 3, 4, 5 ]


const newNoArr = []

arr.forEach((data) => {
    if (data > 4) {
        newNoArr.push(data);
    }
})

console.log("New No Array:", newNoArr) // =>New No Array: [ 5, 6, 7, 8, 9, 10 ]


//practise

const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Classic" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Classic" },
    { title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, genre: "Classic" },
    { title: "Brave New World", author: "Aldous Huxley", year: 1932, genre: "Dystopian" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, genre: "Fantasy" },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997, genre: "Fantasy" },
    { title: "The Road", author: "Cormac McCarthy", year: 2006, genre: "Post-Apocalyptic" },
    { title: "Moby Dick", author: "Herman Melville", year: 1851, genre: "Adventure" },
    { title: "The Da Vinci Code", author: "Dan Brown", year: 2003, genre: "Thriller" }
];


let userBooks = books.filter((val) => val.year > 1960);

// console.log("userBooks: ", userBooks);

/*
userBooks:  [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'Fantasy'
  },
  {
    title: 'The Road',
    author: 'Cormac McCarthy',
    year: 2006,
    genre: 'Post-Apocalyptic'
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    year: 2003,
    genre: 'Thriller'
  }
]
*/

userBooks = books.filter((val) => { val.author === "Harper Lee" });
console.log("userBooks: ", userBooks); // => userBooks:  [] bcoz we have used scope but not using return keyword.

userBooks = books.filter((val) => { return val.author === "Harper Lee" });
console.log("userBooks: ", userBooks); // => userBooks:  [] bcoz we have used scope but not using return keyword.
/*
userBooks:  [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Classic'
  }
]
  */


userBooks = books.filter((val) => {
    return val.genre === "Fantasy" || val.genre === "Classic";
})

console.log(userBooks);
/*
userBooks:  [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Classic'
  }
]
[
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Classic'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Classic'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    genre: 'Classic'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    genre: 'Fantasy'
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'Fantasy'
  }
]
*/