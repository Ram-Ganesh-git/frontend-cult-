//value is stored the stack
const team = "SRH";
const age = 30;

//
const person = {
    name:"shreyas",
    age:30
};

console.log(person);

// RE reference is stored in the heap .
let newName = team;
newName = "mi";
console.log(newName);

// 
let newperson = person;
console.log(person);

console.log(team,newName);