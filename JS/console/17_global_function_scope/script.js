//Globally scope
//let 

//Declaring a variable globally
//1) test and x 2) test and 100 or undifined


//Global or public variables - you can use anywhere in any

// Ex : Global scope
let x = 100;

// Block scope - any thing declare inside { } you can use only block level -Not outside
{
    let y = 200
}

function run(a) {
    //console.log('text')
    console.log(x + a); //105

};
function run2() {
    console.log('text2')
    console.log(x);

};

run(5);
run2();


//Access global variable in Block
if(true) {
    console.log(x);

};

run(5);
run2();

function add() {
    //overide the value
    let x = 1;
    const y = 200;
    console.log(x + y);

};
function minus(){
    console.log(500 - y);

    //

};
add();
minus();

