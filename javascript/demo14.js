console.log("Tutorial 14 : DOM - Child,Parents & Traversing");

// DOM Traversing

let cont = document.querySelector('.no');
console.log(cont); // return the first class given 

cont = document.querySelector('.container');
console.log("Get all Child Node  :",cont.childNodes);  // return all the unnaccessory data with child nodes but in this include comment and text

console.log("All Childens :",cont.children); // retun only child node's not included comments and text


let nodeName = cont.childNodes[0].nodeName;
console.log("ChildNode element :",nodeName);

let nodeType = cont.childNodes[0].nodeType;
console.log("ChildNode element :",nodeType);    // Return 3 (that is simple text)

/* 
Node Types :
1.Element   -   cont.childNodes[0].nodeType; - 1 (that is element)
2.Attributes -  cont.childNodes[0].nodeType; - 2 (that is attributes)
3.Text Node  -  cont.childNodes[0].nodeType; - 3 (that is simple text)
8.Comment   -   cont.childNodes[0].nodeType; - 8 (that is comment)
9.Document  -   cont.childNodes[0].nodeType; - 9 (that is document)
10.docType  -   cont.childNodes[0].nodeType; - 10 (that is docType)
*/

let container = document.querySelector('.container');
console.log(container);

console.log(container.children);    // container class ke all child return 

console.log(container.children[1].children);    // to return child no children

console.log(container.children[1].children[0].children); // child in child in child return 

console.log(container.firstChild);  // return container ka first children

console.log(container.firstElementChild); // return container ka first element 

console.log(container.lastChild);   // return container ka last child

console.log(container.lastElementChild);  // return container ka last element

console.log(container.children);    // container na 7 child se atle count 7 avse
console.log(container.childElementCount);   // container na child element count kari ne apse


// first element pachi no element jova matte atle ke secend element and node check
console.log(container.firstElementChild);
console.log(container.firstElementChild.nextSibling);   // pachi no element #text se 
console.log(container.firstElementChild.nextElementSibling); // sibling means ke first child element pachi no child element jova mate

// but third element and third child node jova mate
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);

// but fourth element and third child node jova mate
console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);


// and then continuess..... nextElementSibling