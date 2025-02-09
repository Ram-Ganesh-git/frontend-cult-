// For-of-loop
const ipl_teams =['RCB','CSK','RR','SRH','MI','DC','KKR','LSG'];

for (const team of ipl_teams) {
    console.log(team);
};

const str = "Hello world";

for (const letter of str) {
    console.log(letter);
};

const users = [
    {name : 'Ram'},
    {name:'ganesh'},
    {name:'manu'},
    {name:'satwik'}
];

//console.log(users[0].name);
//console.log(users[1].name);
//console.log(users[2].name);


//dynamic ga for loop rastunam

for (const user of users){
    console.log(user.name)
}