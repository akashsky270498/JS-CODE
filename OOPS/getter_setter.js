class User {
    constructor(fullname, email, password) {
        this.fullname = fullname,
            this.email = email,
            this.password = password
    }

    // getter 
    // always use the same function name for getter & setter what u have used inside the constructor.
    //variable name should be different to avoid race error.
    get fullname() {
        // return `${this._fullname}`; //we can use the toUpperCase() in set also in get also usually we use in get for better practise.
        return `${this._fullname.toUpperCase()}`
    }

    //setter
    //always pass the parameter in setter
    set fullname(value) {
        this._fullname = value.toUpperCase();
    }

    get password() {
        return `${this._password}@@`
    }

    set password(newPassword) {
        this._password = newPassword;
    }
}

const user_1 = new User("Navneet", "navneet@await.com", "123456asdfghj");
console.log(user_1.fullname); // =>> NAVNEET
console.log(user_1.password); // =>> 123456asdfghj@@
/*
RangeError: Maximum call stack size exceeded
bcoz we are setting/getting the same varibale name i.e. fullname inside consturctor & set/get so we need to change the variable name 
set & get from fullname => _fullname this is called race condition
*/


