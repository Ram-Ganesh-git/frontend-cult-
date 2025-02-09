// Json 

const post = {
    id : 1,
    title : 'post one',
    body : "this is some test body line"
};

//we can converty JS Object to Json string 

const jsonstring =JSON.stringify(post);
console.log(jsonstring);

// we can also convert JSON data into JS Object
const jsOnj = JSON.parse(jsonstring);

console.log(jsOnj);