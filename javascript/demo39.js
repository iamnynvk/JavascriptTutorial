console.log(
  "Tutorial 39 : Regular Expression & Related functions in Javascript"
);

// What is regular expression literals

// 1. // <== apne comment kahiye chiye but eni under lakhvama aave to te regular expression kahevay che
// 2. /nayan/ <== This is Regular expression in Javascript

/*
    Flage of Regular Expression  
    ---------------------------

    1) g: matches the pattern multiple times - let reg = /nayan/g;
    2) i: makes the regex case insensitive
    3) m: enables multi-line mode. Where ^ and $ match the start and end of the entire string. Without this, multi-line strings match the beginning and end of each line.
    4) u: enables support for unicode
    5) s: short for single line, it causes the . to also match new line characters

*/

// we can match regular expression to other sting.
// Function to match expression

let reg = /nayan/; // Normal Regular
reg = /nayan/g; // g - global Line check
reg = /nayan/ig; // i - case insensitive [capital ke small hase to pan match thai jase]

console.log(reg); // return regular exp.  - /nayan/
console.log(reg.source); // regular expression ni under data print thase only - nayan

let newString = "hello my name is NayAn vekariya and nayan alagiya";

// Function below...
//* 1. exec() - this function will return an array or match or null for no match

let result = reg.exec(newString);
console.log(result);
result = reg.exec(newString);
console.log(result);
result = reg.exec(newString);
console.log(result);

//* 2. test() - return true or false ==> value check ane match thase to true avse baki false avse

result = reg.test(newString);
console.log(result);

//*  3. match() - aa function ne apne "String" par lagavishu and return "result array" aape ka to "false" apse.

// let result3 = reg.match(newString);     // This is Wrong Syntax!!
let result3 = newString.match(reg);     // This is Right Syntax

console.log(result3);       // Return Array ['Nayan','nayan']


//* 4.search() - return index of first match else -1

let reg1 = /nayanvks/g;
let result4 = newString.search(reg1);   //  -1
let result5 = newString.search(reg);    //  17
console.log(Number(result4));
console.log(Number(result5));

//* 5.replace() - return new replace sting with all the replacement

let result6 = newString.replace(reg,'savan');   //  OLD : hello my name is NayAn vekariya and nayan alagiya
console.log(result6);                           //  NEW : hello my name is savan vekariya and savan alagiya