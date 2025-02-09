let x;

const name = 'hyderabad';
const lname ='SUNRISERS';
const team = 'Royals Banglore'
const age = 30;

// concatenation 

'hello my name is John and i am 30 years old';
x = 'hello my name is ' + name + ' i am ' + age + ' years old';


// Template literals
x = `Hello, my name is ${name} and i am ${age} years old`;

x = name.length; 

//Access the value by key
x = name[1];
x = name[5];

//Upper case
x = name.toUpperCase();
x = lname.toLowerCase();

// CharAt();
x = lname.charAt(3);
x = lname.charAt(2);

//IndexOf
x = lname.indexOf('U');
x = lname.indexOf('S');

// SubString.
x = lname.substring(2,5);
x = lname.substring(4,6)
x = lname.substring(6);

//Trim
x = team.trim();

//replace
x = team.replace('Royal','Royal Challengers');


//Includes
x = team.includes('Bang');
x = team.includes('bang');


//split - it will return an array of string
x = team.split('');
console.log(x);