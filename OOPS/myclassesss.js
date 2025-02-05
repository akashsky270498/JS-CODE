class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`;
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

const sonu = new User("Aditya", "adi@gmail.com", "123456");

console.log(sonu.encryptPassword()); // => 123456abc
console.log(sonu.changeUsername()); // => ADITYA

//Behind the scene

function User1(username, email, password) {
    this.username = username,
        this.email = email,
        this.password = password
}

User1.prototype.encryptPassword = function () {
    return `${this.password}abc`;
}

User1.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const monu = new User1("Monu", "monu@gmail.com", "123456");

console.log(monu.changeUsername()); // => MONU
console.log(monu.encryptPassword()); // =>> 123456abc