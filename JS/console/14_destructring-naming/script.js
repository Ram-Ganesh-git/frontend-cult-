// setting object properties with the same name as a variable
// Reference Object Making
const firstName ="Ram";
const lastName = "valukuru";
const age = 24;
const address = {city : "Hyd",state : "TG",pin:"58923"}

const person = {
    firstName,
    lastName,
    age,
    address
};

//understanding way // paina una method  ikkada rastuna
// const persion = {
//     firstName :"Ram",
//     lastName :"valukuru",
//     age : 24,
//     address : {
//         city : "Hyd",
//         state : "TG",
//         pin : "589234",
        
//     }

// }

const todo ={
    id:1,
    title:"wash Cloths",
    user:{
        name:"ram"
    }
};
//ee concept nee de-struction a Object
const {id,title,user}=todo
console.log(title);


//console.log(todo.id);


console.log(person.address.state); //TG