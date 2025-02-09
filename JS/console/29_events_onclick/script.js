// Events - Onclick event
// we making comunication between Ui and Javascript
// we need to make communication beeen HTML and Javascript.
// Event -Onclick
console.log("Hey Js root");

function heyFn() {
    console.log("Hey Js from function")
};

//call / Invoke functon
//heyFn();

const numbers1 =[1,2,3,4,5,6,7,8,9,10];

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

function doubleNumbers() {
    const doubleNumbers = numbers1.map((num) => num * 2);
    console.log(doubleNumbers);
};

function doubleEvennumbers() {
    const newArray4 = numbers1.filter((num)=> num % 2===0).map((num) =>num *2);
    console.log(newArray4)
};

function infoAboutcompany() {
    const companyInfo = companies.map((company) =>{
        return{
            name:company.name,
            catogory:company.catogory
        }
    });
    console.log(companyInfo);



}