// For in
const colorobj = {
    colr1:'red',
    colr2:'blue',
    colr3:'orange',
    color4:'green',
};

for(const key in colorobj) {
    console.log(colorobj[key]);
};

//Loop through Arrays
const colorArr =['red','blue','orange','green'];
for (const key in colorArr) {
    console.log(colorArr[key]);
}