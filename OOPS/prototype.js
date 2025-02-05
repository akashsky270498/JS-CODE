const myHeros = ["Thor", "SpiderMan", "SuperMan", "IronMan"];

let heroPower = {
    "Thor": "Hammer",
    "SpiderMan": "Sling",
    "SuperMan": "Fly",
    "IronMan": "Iron"
}

Object.prototype.hitesh = function () {
    console.log(`Thor is present in all the objects.`);
}

heroPower.hitesh(); // => Thor is present in all the objects.
myHeros.hitesh(); // => Thor is present in all the objects.

Array.prototype.heyHitesh = function () {
    console.log("Hello World");
}

// heroPower.heyHitesh(); // => TypeError: heroPower.heyHitesh is not a function
myHeros.heyHitesh(); // => Hello World

//inheritance
const User = {
    name: "Shidesh",
    email: "sid12@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

//modern syntax 
Object.setPrototypeOf(TeachingSupport, Teacher);


let anotherUserName = "Shivansh          ";
console.log("Normal length: ", anotherUserName.length);

// writing our own function 
String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength();
"Sachin".trueLength();
"jasonFrek".trueLength();