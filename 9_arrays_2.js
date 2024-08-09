const odi_players = ["Virat", "Rohit", "Williamson", "Root", "KL"];
const test_players = ["Smith", "Labuschange", "Virat", "Markram", "Williamson"];

odi_players.push(test_players);
console.log("Batters: ", odi_players);
/*
Batters:  [
  'Virat',
  'Rohit',
  'Williamson',
  'Root',
  'KL',
  [ 'Smith', 'Labuschange', 'Virat', 'Markram', 'Williamson' ]
]
  */
console.log("Batters length: ", odi_players.length);
//newly added array will count as 1 element in the array.
console.log("Newly Added Array:", odi_players[5]) // => [ 'Smith', 'Labuschange', 'Virat', 'Markram', 'Williamson' ]
console.log("Elements from newly added array: ", odi_players[5][2]) // => Virat

//Concatanate: always creates a new array
const t20_players = ["Virat", "Rohit", "Williamson", "Root", "KL"];
const batters = t20_players.concat(test_players);
console.log("Concatanate:", batters);

const football = ["Ronaldo", "Messi", "Lewandoski", "Muller", "Messeyala"];

const abc = [1, 2, 3, 4]
const all_players = [...test_players, ...football, ...abc]; // => using spread operator.
console.log([...test_players, ...football, ...abc]); // => using spread operator.
console.log("All players: ", all_players);

/*
All players:  [
  'Smith',      'Labuschange',
  'Virat',      'Markram',
  'Williamson', 'Ronaldo',
  'Messi',      'Lewandoski',
  'Muller',     'Messeyala',
  1,            2,
  3,            4
]
*/


//we can flat a complex nested array using flat method 
//we need to pass the level of complexity in flat method to flat the array in specific level.

const nestedArray = [
    [
        "Level 1 - Item 1",
        [
            "Level 2 - Item 1",
            [
                "Level 3 - Item 1",
                [
                    "Level 4 - Item 1",
                    [
                        "Level 5 - Item 1",
                        [
                            "Level 6 - Item 1",
                            "Level 6 - Item 2",
                            "Level 6 - Item 3"
                        ],
                        "Level 5 - Item 2"
                    ],
                    "Level 4 - Item 2"
                ],
                "Level 3 - Item 2"
            ],
            "Level 2 - Item 2"
        ],
        "Level 1 - Item 2"
    ]
];


console.log("Flat Array: ", nestedArray.flat(5))

/*
Flat Array:  [
  'Level 1 - Item 1',
  'Level 2 - Item 1',
  'Level 3 - Item 1',
  'Level 4 - Item 1',
  'Level 5 - Item 1',
  [ 'Level 6 - Item 1', 'Level 6 - Item 2', 'Level 6 - Item 3' ],
  'Level 5 - Item 2',
  'Level 4 - Item 2',
  'Level 3 - Item 2',
  'Level 2 - Item 2',
  'Level 1 - Item 2'
]
  */

console.log("Flat Array: ", nestedArray.flat(Infinity))

/* 
Flat Array:  [
  'Level 1 - Item 1',
  'Level 2 - Item 1',
  'Level 3 - Item 1',
  'Level 4 - Item 1',
  'Level 5 - Item 1',
  'Level 6 - Item 1',
  'Level 6 - Item 2',
  'Level 6 - Item 3',
  'Level 5 - Item 2',
  'Level 4 - Item 2',
  'Level 3 - Item 2',
  'Level 2 - Item 2',
  'Level 1 - Item 2'
]
*/


//some more methods

console.log(Array.isArray("Dream")); // => false
console.log(Array.from("Cricket")); // => ['C', 'r', 'i','c', 'k', 'e','t']
console.log(Array.from({ name: "My Technologies" })); // => [] which value it will choose ? key or value we need to pass that.

const var1 = "Creater";
const var2 = "Ambasdorr";
const var3 = 4;
console.log(Array.of(var1, var3, var2)); // => [ 'Creater', 4, 'Ambasdorr' ]
