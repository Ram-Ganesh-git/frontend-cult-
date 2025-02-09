let x;

// Objects - can store multiple values with any data ex: arrays

const person =["Ram",24,true,'gachibowli',538243,['cricket','music']];

// same data with objects. (key -value based)

const person2 = {
    name:"Ram",
    age :50,
    isAdmin:true,
    adress:'gachibowli',
    pincode:538243,
    hobbies:'cricket,music'

};

console.log(person2);

// How to read Object values - by using key 
x =person2.name; // Dot notation  //1st method
x =person2.isAdmin;
x = person2.hobbies;
x = person2['age'];  //second method 1st metgod or sec method edi use chesina okate.

// Nested Object
const person3 = {
    name :"Ram",
    age :24,
    isAdmin :false,
    address : {
        street:"123 main road",
        city:"hyd",
        state:'TG'
    },
    hobbies:['cricket','music'],

};

// How to read ?

x = person3.address.state;
x = person3.address.street;
x = person3.hobbies[1];

// Update the values in Object
person3.name = "manohar";
person3.isAdmin = true;

//create/add new property
person3.role = 'software Dev'

// Deleting property 
delete person3.age;
console.log(person3);

//add A function
person3.greet = function () {
    console.log(`my name is ${this.name}` )
}

person3.greet();

console.log(x);
