console.log("Tutorial 4 : Type Conversion & Type Coercion");

// TYPE CONVERSION
// Integer to String
let myvar;
myvar = String(34);
console.log(myvar, typeof(myvar));

// Boolean to String
let bool = String(true);
console.log(bool, typeof(bool));

// Date function to String
let date = String(new Date());
console.log(date, typeof(date));

// Array to String
let arr = String([12,13,14,15]);    // checking to characters
console.log(arr.length, typeof(arr));

// toString() Methord 
let i = new Date();
console.log(i.toString(), typeof(i.toString()));

let v = false;
console.log(v.toString(), typeof(v.toString()));

let st = Number('3245');
st = Number(true);
console.log(st ,typeof(st));

// ParseInt
let no = parseInt('34.0907');
console.log(no, typeof(no));

// ParseFloat
let b = parseFloat('34.0907');
console.log(b, typeof(b));

// toFixed - how many number show in decimal number for pricing.
console.log(no.toFixed(4));


// TYPE-COERCION

let mystr = "580";
let mynum = 34;

console.log(mystr + mynum);


let mystr1 = Number("580");
let mynum1 = 34;

console.log(mystr1 + mynum1);
