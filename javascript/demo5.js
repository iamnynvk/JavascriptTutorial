console.log("Tutorial 5 : String - Methord,Properties & Template");

const fname = "Nayan";
const greeting = "Good Morning";
console.log(greeting + " " + fname);


let html;
html = `<h1> Hii This is Nayan Vekariya</h1>
<h2>Today My Interview Was Gone To Worst</h2>`;
console.log(html);

html = html.concat(`<h2>This hey</h2>`); // String concate [adding to html line]
console.log(html);


console.log(html.length);   // checking length

console.log(html.toLowerCase());    // to change in Lowercase

console.log(html.toUpperCase());    // to change in Uppercase

console.log(html[1]);  // start to 0 with so on

console.log(html.indexOf('This'));  // where is to start this

console.log(html.lastIndexOf("Worst")); // last to Index start

console.log(html.charAt(1));    // check place in what store

console.log(html.endsWith("</p>")); // check last word - true and false

console.log(html.startsWith("<h1>"));   // checking first word - true and false

console.log(html.includes("Nayan Vekariya"));   // Check this word include in line

console.log(html.substring(1,10));  // start with 1 to end 10 char give

console.log(html.slice(0,4))    // 0 to 4 return character

console.log(html.split(" "))    // using space to return Array - string ne todine return kari de

console.log(html.replace("This","My")); // replace this to My word

console.log(html.repeat(2));   // Give me 2 time return the String

document.write(html.italics()); // Change to italic 

document.write(fname.bold());   // for bold words

document.write(html.fontcolor("green")) // changin color in String



let fruits = ['Orange\'\'','\Home\'work','Javascript']
const myhtml = `<p> My Name is ${fname} and i am eating to ${fruits[0]}
and then i will completed my ${fruits[1]} and after i learn ${fruits[2]}</p>`;

document.write(myhtml);

