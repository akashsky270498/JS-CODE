// IIFE: Immediately Invoked Function Expression.

(function iife() {
    console.log("DB Connected"); // => DB Connected
})(); // => dont forget to give semicolon at the end to execute the second IIFE in the same file.


(() => {
    console.log("Arrow function DB connected"); // => Arrow function DB connected
})();

// function with parameters & arguments

((name) => {
    console.log(`Hey ${name}, Arrow function DB connected`)  // => Hey Ram, Arrow function DB connected
})("Ram");

/* 
Encapsulation: Keeps variables private, avoiding conflicts with other parts of your code.
Initialization: Can be used to run initialization code without leaving a footprint in the global scope.
*/