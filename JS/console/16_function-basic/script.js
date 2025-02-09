// Group of people union => Function.
// Group of code         => Function.


// JS Function - is set of code will execute when it is called 

console.log('one');
console.log('two');



// syntax to write JS Function

function show_console () {
    console.log('three');
    console.log('four');
};

console.log('five');


// call a function or excute function, invoke a function.

//show_console ();

function say_hello() {
    console.log('Hello There');
};

// Invoke or call a function

say_hello();


function add_numbers() {
    const a = 10;
    const b = 20;
    const c = a+b;
    console.log(c);

};

function subs_numbers() {
    const a = 10;
    const b = 20;
    const c = a-b;
    console.log(c);

};

add_numbers();
subs_numbers();


// Realtime use of the functions

//Function with parameters inside a bracket.
function add_dynamicvalues(num1,num2) {
    console.log(num1 + num2);
};

add_dynamicvalues('hello',30); // Invoking function with 2 parameters


const person3 = {
    name:"ram",
    age : 24,
    isAdmin : false,
    address : {
        street :'123 main road',
        city : 'Hyd',
        state :"Tg"
    },
    hobbies :['cricket','music']
};

function show_address(person) {
    console.log(person.address.street);
};

function show_hobbies(person) {
    console.log(person.hobbies);

};


show_address(person3);
show_hobbies(person3);


// Default parameters


//Function with Return value
function registeruser (user = "Bot") {
    return user + "is Register";
};

console.log(registeruser());

// Object a parameter

function loginuser(user) {
    // The user Manu with the id of 1 is logged in
    return `the user ${user.name} with the id of ${user.id} is logged in`;

    //return 'the user ' + user.name + ' with the id of ' + user.id + ' is looged in';

};

const user = {
    id:1,
    name:"Manu"
};

console.log(loginuser(user));





//task
const arr1 =[];
const arr2 =[];

function concate_arrays(a,b) {
    //write logic

};

concate_arrays[arr1, arr2];

// with the functions.
//Add new value to arrays
//concate multiple arrays.
//show current time.
//show Day (sun) - from time stamp.
//create array - object and read first  element of objects. (IPl Team, your fav Movie list.... )
// Check wether passes argument is available or not in a provided array
// check_availabilty ('xyz',arr1)



