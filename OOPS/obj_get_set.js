const User = {
    _email: "Aditya",
    _password: "123456asdfg",

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value
    }
}

const user = Object.create(User);
console.log(user.email); // =>> ADITYA
console.log(user._email); // =>> Aditya