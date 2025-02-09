//filter, Map, reduce methods - will return the array
const numbers=[1,2,3,4,5,6,7,8,9,10,11,12];

// Even numbers[2,4,6,8,10,12]; Divinde by 

//const evenNumbers=numbers.filter((number) =>);


//Tratinal way
const evenNumbers=numbers.filter(function(number){
    return number % 2===0;;
});
console.log(evenNumbers);

           //(tradinal way shorthand method two methods loo edaina rayachu)..

//shaorthand prop
const evenNumbers2=numbers.filter((num) => num %2===0);
console.log(evenNumbers2);


//Tasks

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

//Get only Retail companies

const retailCompanies = companies.filter((company) => company.catogory=='Retail');
console.log(retailCompanies);

//Get only Auto companies

const autoCompanies = companies.filter((company) => company.catogory=='Auto');
console.log(autoCompanies);


//Get companies that started in or after 1980 ende in before 2005
const earlyCompanies = companies.filter(
    (company) => company.start  >= 1980 && company.end <= 2005
);
console.log(earlyCompanies);
