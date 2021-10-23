console.log("This is Third Tutorial");

/* Data-type in JS
1. Primitive Datatype [Stack]
    i) String   -   " " - Collection of characters
   ii) Number   -   34  - Represent of number 
  iii) Boolean  - By Default False(0) / True(1)
   iv) Null     - Null Value 
    v) Undefined    -   var name; -> name default value is undefined
   vi) Symbol   -   Lettet Version include JS

2. Reference Datatype [Heap]
    i) Array
   ii) Object literal 
  iii) Function
   iv) Date
*/

console.time("Loading");
// String
let fname = `Nayan Vekariya`;
console.log("My Name is "+fname);
console.log("String Data-Type is "+typeof(fname));


// Number
let marks = 35;
console.log("My Marks is "+marks);
console.log("Number Data-Type is "+typeof(marks));


//Boolean
let isDrive = true;
console.log("Boolean Data-Type is "+typeof(isDrive));


//Null - Boghas return value - Object Datatype but include in Primitive Datatype
let nullVal = null;
console.log("Null Data-Type is "+typeof(nullVal));


// Undefined
let undef = undefined;
console.log("Undefined Data-Type is "+typeof(undef));


//Symbol - Symbol is Function Type but include in Primitive Datatype
let sym = Symbol;
console.log("Symbol Data-Type is "+typeof(sym));


//* Reference Data-Type

// Array
let arr1 = [1,2,3,4,5,false,"String"];
console.log("Array Data-Type is "+typeof(arr1));
console.timeEnd("Loading");


// Object-Literals
let studentMark = {
    nayan: 20,
    savan: 30,
    niketan: 23
}
console.log("Object-Literal Type : "+typeof(studentMark));
console.table(studentMark);


// Function
function fan(){

}
console.log("Function Type : "+typeof(fan));


// Date
let time = new Date();
console.log(time);
console.log("Date Type : "+typeof(time));





















