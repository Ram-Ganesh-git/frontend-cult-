// For Loop
// if(condition) {}
//for ([initial expression] [condition Expression] [increment Expression]) {}
//[condition Expression] - condition that the loop will run
// increment Expression - will excute after each iteration 

//syntax - Example
let a =1;
console.log(a++)


for(let i = 0; i <= 5; i++) {
    console.log("hey js");
}

// hey js
//hey js
//hey js
//hey js
//hey js
//hey js


const ipl_teams = ['RCB','CSk','RR','SRH','MI','DC','KKR','Lsg'];
//RCB
//CSK
//RR
//2020 ipl winner is :srh
//Mi
//Dc
//KKR
//LSg

for(let i = 0; i <ipl_teams.length; i++) {
    if(ipl_teams[i] =='SRH') {// SRH ==srh
        console.log(`2024 ipl winner is ${ipl_teams[i]}`);
    }else{
        console.log(ipl_teams[i]);

    }
}