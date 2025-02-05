function User(name, email, password) {
    this._name = name,
        this.email = email,
        this._password = password,

        Object.defineProperty(this, 'name', {
            get: function () {
                return this._name.toUpperCase();
            },

            set: function (newName) {
                this._name = newName;
            }
        })

    Object.defineProperty(this, 'password', {
        get: function () {
            return `${this._password}@abcd`;
        },

        set: (newPassword) => {
            this._password = newPassword;
        }
    })


}

const User_1 = new User("Ishant", "ish@gmail.com", "1234567");

console.log(User_1.name); // =>> ISHANT
console.log(User_1.password); // ==>> 1234567@abcd
