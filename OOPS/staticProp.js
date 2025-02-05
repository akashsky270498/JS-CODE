class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is: ${this.username}`);
    }

   static createId() {
        return `1234567`
    }
}

const sonu = new User("Monu")
// console.log(sonu.createId()); 

class Teacher extends User {
    constructor(username, email){
        super(username) // => statis
        this.email = email
    }
}

const monu23 = new Teacher("Sonu", "sonu@yahoo.com")
console.log(monu23.createId());