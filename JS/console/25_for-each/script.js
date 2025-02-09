// For Each
const socials =['Twitter','Linkdin','FaceBook','Instagram'];
console.log();

// Long way

socials.forEach(function(item){
    console.log(item);
});

//shorthand 
socials.forEach((item) => console.log(item));

// we can also pass in the index and original array as optional params
socials.forEach((item,index,arr) => console.log(`${index}-${item}`,arr));

//using a named function
function logsocials(social) {
    console.log(social);

};

socials.forEach(logsocials);

//Arrays of objects
const socialsobjs = [
    {name:'Twitter',url:'https://twitter.com'},
    {name:'Facebook',url:'https://facebook.com'},
    {name:'Linkdin',url:'https://linkdin.com'},
    {name:'Instagram',url:'https://instagram.com'},

];

socialsobjs.forEach((item) => console.log(item.url));