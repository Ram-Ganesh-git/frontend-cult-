// Arrow Function !


// Function declaration
function addnumbersDe(x,y) {
    console.log(x + y);
};

addnumbersDe(6,7);



// Function Expression
const addnumbers = function (a,b) {
    return a + b

};


// Arrow Function
const addnumbersde = (e,f) => {
    return e + f;

};

// Implicit Return 
const substract = (g, h) => g - h;// 100


// 
const double = (t) => t * 2;


console.log(addnumbers(2,4));
console.log(addnumbersde(10,20));
console.log(substract(20,30));
console.log(double(100));