//for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element === 5) {
        console.log("5 is printed")
    }
    console.log(element); // => 0,1,2,3,4, 5 is printed,5,6,7,8,9,10
}

// console.log(element) // => ReferenceError: block scope problem


//Nested loop
for (let i = 2; i <= 4; i++) {
    console.log(`Table of ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(i + '*' + j + '=' + i * j);
    }
}

//ouput
/*
Table of 2
2*1=2
2*2=4
2*3=6
2*4=8
2*5=10
2*6=12
2*7=14
2*8=16
2*9=18
2*10=20

Table of 3
3*1=3
3*2=6
3*3=9
3*4=12
3*5=15
3*6=18
3*7=21
3*8=24
3*9=27
3*10=30

Table of 4
4*1=4
4*2=8
4*3=12
4*4=16
4*5=20
4*6=24
4*7=28
4*8=32
4*9=36
4*10=40
*/

const myArray = ["Avengers", "America", "Arrow", "Spiderman"];
console.log("The length of an Array: ", myArray.length); // => 4

for (let i = 0; i < myArray.length; i++) {
    const myArrayElements = myArray[i];
    console.log(myArrayElements);
}

//Note: if we'll not use increment operator our loop will get stuck in infinite loop
//output
/*
Avengers
America
Arrow
Spiderman
*/

//break keyword: When the condition will met loop stops its further execution.

for (let j = 1; j <= 10; j++) {
    if (j == 5) {
        console.log(`j = ${j} found`);
        break;
    }
    console.log(`Value of ${j}`);
}

/*
Value of 1
Value of 2
Value of 3
Value of 4
j = 5 found
*/

//continue : When the condition will met one time it will skip the value.
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log(`i = ${i} found`);
        continue;
    }
    console.log(`Value of ${i}`);
}

/*
Value of 1
Value of 2
Value of 3
Value of 4
i = 5 found
Value of 6
Value of 7
Value of 8
Value of 9
Value of 10
*/