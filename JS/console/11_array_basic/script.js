// Arrays - can store multiple values/data - any data type.

let x;

// Array literals
let hyd ="SRH";
let kolkaths ="KKR";
let mumbai = "MI";
let delhi = "DC";
let chennai = "CSk";

//Define an arrays

const ipl_team = ['SRH','KKR','MI','DC','CSK','RCB'];
const numbers = [1,2,3,4,5,6,7,8,9,10];
const mixed =['ram',30,true,false,17,11.17];



// Index and values -> Index start with 0
// Get values in a array by index.
x = ipl_team[5];
console.log(x);
x = mixed[5];
x = numbers[9] + 1;
x = numbers[9] + numbers[4] + numbers[1] + numbers[2] + numbers[3];    // 20 with out giving manual numbers
     // 10      +   5       +    2       +   3        +  4

// Length of aaray
x =  ipl_team.length;   
x = numbers.length; 

const fruit =['apple','grape','banana'];

// change the arrays values by Index.
console.log(fruit);
fruit[0] = 'mango';
console.log(fruit);
//console.log(numbers);
//console.log(mixed);