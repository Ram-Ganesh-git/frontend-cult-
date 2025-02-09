// if condition 
// if(10,000) {ill watch match}
// if-else(6,000) {ill watch with 6k}
// if-else(3,000) { ill watch with 3k}
// if -else(2,000) {ill watch with 2k}
// Return back {Return back hope}

//if statement statement.

if(true)
{
    console.log('This is true')
}

if(false) {
    console.log('This is false')
}

console.log(10 >= 5);

// Evalution expression
const x = 10;
const y = 5;

if(x >= y) { //10 >=5
    console.log(`${x} is greater than equal to ${y}`);

};

if(x===y) { //10 == 5 -> False
    console.log(`${x} is equal to ${y}`);
} else{
    console.log(`${x} is NoT equal to ${y}`)
}

if(x !== y) {
    const z=20;
    console.log(z);
    
}

//console.log(z); // Error


const d = new Date (10, 30, 2022, 6,0,0);
//const hour =d.getHours()
//console.log(hour);
const hour = 8;

if(hour < 12) {
    console.log('Good Morning');
} else if(hour <18){
    console.log('Good afternoon');

} else{
    console.log('Good Night')
}



// 7Am to 3PM => it time to work
// called and($$) , or(||)
if(hour >= 7 && hour < 15) {
    console.log("time to work");
}



// if(10,000) {ill watch match}
// if-else(6,000) {ill watch with 6k}
// if-else(3,000) { ill watch with 3k}
// if -else(2,000) {ill watch with 2k}
// Return back {Return back hope}

const ipl_ticket = 2000;

if (ipl_ticket ==10000) {
    console.log(`I got ${ipl_ticket} ticket`);

}else if(ipl_ticket == 6000) {
    console.log(`I Got ${ipl_ticket} ticket`);
}else if(ipl_ticket == 3000) {
    console.log(`I got ${ipl_ticket} ticket`);
}else if(ipl_ticket ==2000){
    console.log(`I got ${ipl_ticket} ticket`);
}else{
    console.log('Intiki poo nana');
};

// 
const age = 17;
if(age >= 18) {
    console.log('you can vote');

}else{
    console.log('you cant vote');
}

// same with ternary operator (short cut)
 age > 18 ? console.log('you can vote'): ('you cant vote');;

// 
const auth = false;

//shorter terinary version
const redirect = auth ? (alert('welcome to website'),'/dashboard page')
                        : alert('user or password is wrong','login');

console.log(redirect);                       