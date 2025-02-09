// Go to 'source' tab in developer tool, put break points firstline through to see the execution works in action. 

const x = 100;
const y = 50;

function getsum(n1,n2) {
    const sum = n1 + n2;
    return sum;

};

const sum1 = getsum(x,y);
const sum2 = getsum(10,5);

console.log(sum1,sum2); // 150