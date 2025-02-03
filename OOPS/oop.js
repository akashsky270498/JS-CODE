const user = {
    username: "Aditya Sharma",
    "loginCount": 8,
    "isLoggedIn": true,

    getUserDetails: () => {
        // console.log("got User Details");
        console.log(`userName: ${this.username}`); // userName: undefined bcoz () => doesn't have there own this, they inherit from surrounding scope.
    },

    getUserDetailById: function () {
        console.log(`username: ${this.username}`);
        console.log(this); // print all the items from current context
    }
}

console.log(user.username);
console.log(user['isLoggedIn']);
console.log(user.getUserDetails());
console.log(user.getUserDetailById());
console.log(this); // {} global function execution it changes 

function User(username, loginCount, isLoggedIn) {
    this.username = username,
        this.loginCount = loginCount,
        this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        console.log(`Greetings!: ${this.username}`);
    }
    return this //if we will not use return this then also it will work.
}

/*
const userOne = User("Aditya", 8, true); 
const userTwo = User("Sumit", 9, false) 
If we will not use new keyword it will override the userOne value
*/
const userOne = new User("Aditya", 8, true);
const userTwo = new User("Sumit", 9, false);

console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor); // [Function: User]