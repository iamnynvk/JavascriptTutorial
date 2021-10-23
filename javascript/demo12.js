console.log("Tutorial 12: DOM (Document object model) & Creating Website Layout");

// let a = window.document; // or let b = document;
// document means all data visible on website for document form

//console.log(typeof(a)); // object
//console.log(a);

// Check all the parents and child view for document.all function.
// let b = document;
// b = document.all;

// console.log(b);

// Only check head section of document 
// b = document.head;
// console.log(b);

// Only check body section of document 
// b = document.body;
// console.log(b);

// Only check All Forms section of document 
// b = document.forms;
// console.log(b);

// document object is not function so you cant forEach loop
// b.forEach(element => {
//   console.log(element); 
// }); - this is not working

// But you can write this methord
// That's Means : b ki madad se banalo ek array or usko itrate karlo

// Array.from(b).forEach(element => {
//   console.log(element); 
// });


// How to fatch link in document
// c = document.links;
// console.log(c);

d = document.images;
//console.log(d);
Array.from(d).forEach(element => {
  console.log(element); 
});

c = document.scripts;

Array.from(c).forEach(element => {
  console.log(element);
})