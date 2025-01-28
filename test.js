console.log("Hitesh");

console.log("Start");

setImmediate(() => {
    console.log("Set Immediate");
});

setTimeout(() => {
    console.log("Set Timeout");
}, 1000);

console.log("End");