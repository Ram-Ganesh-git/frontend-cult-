// Nested Arrays ?

let x;

const fruits =['Apple','pear','orange'];
//console.log(fruits);
const berries =['starberry','Bliberry','rasberry'];

const vegies =['tomoto','aalu']

const number = [1,2,3,5,[6,7,8,9]];
// I want push berries into fruits array
fruits.push(berries);

console.log(fruits);

// How to read nested array values
//x = fruits[3][2];

// create a new VAr and nest both arrays
const allFruits = [fruits,berries];

// concate() - concat array
x = fruits.concat(berries);

// Spread operator(...) - concat with

x =[...fruits, ...berries, ...vegies];

// flat() - Flatten array

const arr =[1,2,[4,5],6,[7,8]];

//isArray method

x = arr.flat();
console.log(arr);

x =Array.isArray(arr);
console.log(allFruits);


console.log(x);
