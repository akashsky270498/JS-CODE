const coding = ["js", "ts", "ruby", "python", "swift", "cpp"];

//forEach loop
coding.forEach(function (item) {
    console.log(item);
})
/*
js
ts
ruby
python
swift
cpp
*/

//with Arrow function
coding.forEach((item) => {
    console.log(item)
})


function printMe(value) {
    console.log("value:", value);
}

coding.forEach(printMe) // => just pass the reference of the function dont execute it .
// coding.forEach(printMe())

/*
value: js
value: ts
value: ruby
value: python
value: swift
value: cpp
*/

const arrowFunc = (val) => {
    console.log("Arrow:", val)
}

coding.forEach(arrowFunc);

/*
Arrow: js
Arrow: ts
Arrow: ruby
Arrow: python
Arrow: swift
Arrow: cpp
*/

coding.forEach((item, index, arr) => {
    console.log(item, index, arr)
})

/*
js 0 [ 'js', 'ts', 'ruby', 'python', 'swift', 'cpp' ]
ts 1 [ 'js', 'ts', 'ruby', 'python', 'swift', 'cpp' ]
ruby 2 [ 'js', 'ts', 'ruby', 'python', 'swift', 'cpp' ]
python 3 [ 'js', 'ts', 'ruby', 'python', 'swift', 'cpp' ]
swift 4 [ 'js', 'ts', 'ruby', 'python', 'swift', 'cpp' ]
cpp 5 [ 'js', 'ts', 'ruby', 'python', 'swift', 'cpp' ]
*/

const myNewArray = [
    {
        languageName: "Javascript",
        languageFile: "js"
    },

    {
        languageName: "Pythion",
        languageFile: "py"
    },

    {
        languageName: "Typescript",
        languageFile: "ts"
    },

    {
        languageName: "swift",
        languageFile: "file"
    }
]


myNewArray.forEach( (val) => {
    console.log(val)
})

/*
{ languageName: 'Javascript', languageFile: 'js' }
{ languageName: 'Pythion', languageFile: 'py' }
{ languageName: 'Typescript', languageFile: 'ts' }
{ languageName: 'swift', languageFile: 'file' }
 */

myNewArray.forEach((item) => {
    // console.log(item);
    console.log(item.languageName);  
    console.log(item.languageFile)
})

/*
Javascript
js
Pythion
py
Typescript
ts
swift
file
*/