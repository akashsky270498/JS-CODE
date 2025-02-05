function multiplyBy5(num) {
    return num * 5
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5)); // 25
console.log(multiplyBy5.power); //2 => power is a property & multiplyBy5 is an object, so here we are accessing the value of power from multiplyBy5 object.
console.log(multiplyBy5.prototype); // {} protoptype is also a property null bcoz contructor function is not yet called.

function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function () {
    this.score++;
}

createUser.prototype.printMe = function () {
    console.log(`The score is ${this.score}`);
}

const user1 = new createUser("Sonu", 25);
const user2 = new createUser("Monu", 32);
 /* if we will not use new keyword contructor function will not get called & user defined function will  get undefined error */
console.log("user_1: ", user1);
console.log("user_2: ", user2);

user1.printMe() // => 25
user2.printMe() // => 32
user1.increment()
user1.printMe() // => 26