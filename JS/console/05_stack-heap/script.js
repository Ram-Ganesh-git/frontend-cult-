// Value is stored in the stack.
const team ='SRH';
const age = 30;

const person = {
    name : 'shreyas',
    age : 30
}


// Ref reference is stored in the heap.
 let newName = team;
newName = 'Mi';

let newPerson = person;

console.log(newName);
console.log(person);


console.log(team, newName);