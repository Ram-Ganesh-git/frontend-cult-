let x;
const arr =[28,38,44,29,109];

// Push() - push value on the end of the array
arr.push(100);
arr.push(17);

// pop() - Take the last value off
arr.pop();

// unshift - Add a value the beginning of the array
arr.unshift(99);

//shift() - remove first value
arr.shift();

//reverse() - reversed the array
//arr.reverse();

// Includes () - it will check the given is available or not
x = arr.includes(44);

// indexof - return the index value
x = arr.indexOf(109);


// Return array as a string
x = arr.toString();
x = arr.join("s");

//slice() - Return selected elements in an array
x = arr.slice(0,4);
x =arr.slice(2,5);
console.log(x);

//splice - it will remove sinle element value
const arr2 =[28,38,44,29,109];
x = arr2.splice(2,3);  // 1st starting position // 2nd how many elements you want to remove after position 

console.log(x);
console.log(arr);

