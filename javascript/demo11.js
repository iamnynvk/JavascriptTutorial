console.log('Tutorial 11 : Windows Object in Javascript');


// ***************** WINDOWS FUNCTION *******************


// Fatching all Windows Function 
// let a = window;
// console.log(a);

//windows function is globally in script so you can access each function directly
/*
alert("Direct alert");
window.alert("windows function throw fatch alert");
a.alert("variable throw using function");
*/

// You can input from user's using prompt - enter user something
/*
let a = prompt("I can Destroy Your computer ?")
if(a==='yes'){
    close();
}else if(a==='no'){
    console.log("Ok");
}else{
    alert("I can Help?");
}   
*/

// Conform use for permision - true false
/*
let a = confirm("can i exit this current windows");
console.log(a);

if(a===true){
    close();
}else{
    console.log("Oks Don't Warry");
}
*/

// our file are show in document form 
// let a = window.document;
// console.log(a);


// Find innerHeight & innerWidth
// let a = innerWidth;
// let b = innerHeight;
// console.log("innerWidth :",a ," X innerHeight :",b);


// Find outerWidth & outerHeight
// let c = outerWidth;
// let d = outerHeight;
// console.log("outerWidth :",c ," X outerHeight :",d);


// Find ScrollX & ScrollY
// let a = scroll(); // scroll not define
// console.log(a);

// let a = scrollX;
// console.log(a);

// let b = scrollY;
// console.log(b);

// windows History Function - show all history from this page to another page
// let c = window.history;

// history.go(+1); // you go +1 in youtube page

// history.go(-1); // this go -1 to review you back page


// console.log(c);


// ******************* LOCATION FUNCTION  ********************


// Location - fatch all location data any sites 
// let a = location;
// console.log(a);

// location.reload() function is windows site again again load
// let b = location.reload();

// // location.replace() function - to current page replace to sites
// let a = location.replace("https://www.google.com");
// console.log(a);

// Find current Location
// let a = location.href;
// console.log(a);

// let b = location.host;  // find Host

// let b = location.hostname;  // find Hostname

// let b = location.origin;    // find original current path of site 

// let b = location.port;      // find port name

// let b = location.protocol;      // find protocol which site use it

// let b = location.toString();    // find original current path of site 

// let b = location.href = "https://mail.google.com/mail/u/0/#inbox";  // Page redirect any site's

// console.log(b);

