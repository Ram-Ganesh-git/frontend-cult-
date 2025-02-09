// Function Declaration.
function adddollersymbol(value) {
    return '$' + value;
};

//Function Expression (Assining the return value to a variable - after will do console)
const addplussymbol = function(value) {
    return '+' + value;
};

console.log(adddollersymbol(200));
console.log(addplussymbol(300));
