class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);;
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username),
            this.email = email,
            this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const sonu = new Teacher("Monu", "monu@gmail.com", "123456789");
console.log(sonu.password); // => 123456789
sonu.addCourse(); // => A new course was added by Monu
sonu.logMe(); // => USERNAME is Monu

const monu = new User("Sonu");
console.log(monu.password); // => undefined
// monu.addCourse();
monu.logMe(); // => Sonu

console.log(sonu === monu); // =>> false
console.log(sonu === Teacher); // =>> false
console.log(sonu instanceof Teacher); // =>> true
console.log(sonu instanceof User); // =>> true