console.log("Tutorial 15 : Creating, Removing & Replace Element");


// ********************** CREATE ELEMENT *******************
// Create an Element via javascript
let element = document.createElement("li");
// console.log(element);   // Simple create 'li' element

// Add to class name to the element
element.className = "childul";
// console.log(element);

// Add to ID to the element
element.id = "lastli";
// console.log(element);

// Add to Attributes
element.setAttribute("title","myTitle");
console.log(element);

// Add innerHTML/innerText set use for text printing
element.innerHTML = "Hey This is Nayan Vekariya";
// element.innerText = "Hey baaby!";

// how to append this element - target other one 
let ul = document.querySelector("ul.this");
console.log(ul);

// set element ul section in Html website code 
ul.appendChild(element);
console.log(ul);

//*********************REPLACE ELEMENT*********************** */

let elem2 = document.createElement('h3');
elem2.id = "elem2";
elem2.className = "elem2";
let tnode = document.createTextNode("This is Create node elem2")
elem2.appendChild(tnode);

element.replaceWith(elem2);

// You can child replace
let myul = document.getElementById("myul");
myul.replaceWith(element,document.getElementById('fui'));


//*******************REMOVING ELEMENT*********************** */

//myul.removeChild(document.getElementById('lui'));
// let pr = elem2.getAttribute('id');   // return id
let pr = elem2.hasAttribute('id');  // return True/False check is exist or not
console.log(elem2,pr);

elem2.removeAttribute('id');
console.log(elem2);


