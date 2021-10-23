console.log("Tutorial 22 : Date & Time Object");


// simple date object
let today = new Date();
console.log(typeof(today));
console.log(today);

// get otherDate fatch 

let otherDate = new Date('Jul 12 2000');    // mm-dd-yyyy formate
console.log(otherDate);

otherDate = new Date('07-12-2000 12:05:29');    // get date
console.log(otherDate);

let a = otherDate.getDay();     // weekly day according mon-1
console.log(a);         // tue-2,wed-3 soo on...

a = otherDate.getDate();    // get date
console.log(a);

a = otherDate.getFullYear();    // 2000
console.log(a);

a = otherDate.getHours();   // hour-12
console.log(a);

a = otherDate.getMilliseconds();   // milliseconds
console.log(a);

a = otherDate.getMinutes();   // getMinutes
console.log(a);

a = otherDate.getSeconds();   // getSeconds
console.log(a);

a = otherDate.getMonth();   // getMonth
console.log(a);

a = otherDate.getTime();   // getTime - number of sec
console.log(a);

otherDate.setDate(23);
console.log(otherDate);     // change date using setDate

otherDate.setMonth(2);
console.log(otherDate);     // set Month using setMonth

otherDate.setFullYear(2001);
console.log(otherDate);     // set FullYear using setFullYear

otherDate.setHours(09);
console.log(otherDate);     // set Hours using setHours

otherDate.setMinutes(09);
console.log(otherDate);     // set Minutes using setMinutes

otherDate.setMilliseconds(09);
console.log(otherDate);     // set Milliseconds using setMilliseconds

otherDate.setSeconds(09);
console.log(otherDate);     // set Seconds using setSeconds
