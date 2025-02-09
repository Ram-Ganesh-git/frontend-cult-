// Map function
const numbers =[1,2,3,4,5,6,7,8,9,10]; //[2,4,6,8.10,12,14,16,18,20]

const doubletheNumbers = numbers.map((num) => num *2);
console.log(doubletheNumbers);

//same with forEach

const doubletheNumbers2 =[];
numbers.forEach((num) => {
    doubletheNumbers2.push(num * 2);
});

console.log(doubletheNumbers2);

//map array object..
const companies =[
    {name:'wipro',catogory:'Retail',start:1980,end:2004},
    {name:'Infosys',catogory:'Finance',start:1992,end:2008},
    {name:'Facebook',catogory:'Auto',start:1999,end:2007},
    {name:'Insta',catogory:'Retail',start:1989,end:2010},
    {name:'Twitter',catogory:'Finance',start:2009,end:2010},
    {name:'Xyz',catogory:'Auto',start:1987,end:1996},
    {name:'Linkdin',catogory:'Retail',start:2011,end:2016},
    {name:'ABCD',catogory:'Techonology',start:2011,end:2016},
    {name:'TUTUTU',catogory:'Techonology',start:1981,end:1989},
];

// Create an array of all companies names
const companiesNames = companies.map((company) => company.name);
console.log(companiesNames);

// Create an array with just company name and catogory
const companyInfo = companies.map((company)=>{
    return {
        name:company.name,
        catogory:company.catogory
    }
});
console.log(companyInfo);

// Ex..
const numbers1 =[1,2,3,4,5,6,7,8,9,10]; //[4,8,12,16,20]-- //we making double even numbers output
const newArray = numbers.map((num) => num*4);
console.log(newArray);

const newArray2 = numbers.filter((num) => num %2 ===0);
console.log(newArray2);

const newArray3 = newArray2.map((num) => num*2);
console.log(newArray3);

// chaining method
const newArray4 = numbers.filter((num) => num % 2 ===0).map((num) => num * 2);
console.log(newArray4);