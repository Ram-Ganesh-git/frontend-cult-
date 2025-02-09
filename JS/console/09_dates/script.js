let d;

//Get Todays Date and Time
d = new Date();

// Get Current Timestamp 
d = Date.now();

// Extract date from timestamp
d = new Date(1713611086115);

// pass in a string
d = new Date('2021-07-10T11:17:00');
d = new Date('07/10/2021 11:17:00');
d = new Date('2022/5/17');
d = new Date('5-17-1999');
d= new Date('1-11-1999');

//
d = new Date();
d = d.getTime();
d = d.valueOf();

// More Date Methods
d = new Date();

x = d.toString();
x = d.getTime();
x = d.getFullYear();
x = d.getMonth()+1;
x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();

// Make full date by using concatination
x = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
console.log(x);