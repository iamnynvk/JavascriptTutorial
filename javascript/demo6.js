console.log("Tutorial 6 : Arrays and Object's");

// Array

let mark = [80,88,90,78,67];
const fruits = ["Orange","Apple","Banana"];
let mixed = ["Nayan",90,true,["Vekariya",89]];

console.log(mixed);
console.log(fruits[1],mark[2]); // arrays start with 0
console.log(mark);

let arr = new Array(22,34,55,"NewType Array");
console.log(arr);

// Properties

console.log(mixed.length);  // length of array 
console.log(arr.concat(10));    // adding more element in last place of array
console.log(Array.isArray("nayan"));    // check is array or not
console.log(Array.isArray(arr));    // if yes print true other wise false print

mark[0] = 'Failed';
console.log(mark);  // any time update directly

console.log("Student Marks :",mark);

let value = mark.indexOf(90);   // checking to which index to store this number
console.log(value);

// Muteting (Modify Array)

mark.push(75);  // push value in array in last position
console.log(mark);

mark.pop(); // Delete the last element of array
console.log(mark);

mark.unshift(45);    // Starting place store in array
console.log(mark);

mark.shift();   // Delete the first element of array
console.log(mark);

mark.splice(0,2);   // Delete element from 0 to 2 index
console.log(mark);

mark.reverse();     // to reverse array position
console.log(mark);

let subject = ["Maths","Science","Social Science"];
mark = mark.concat(subject);    // concate with array
console.log(mark);




// OBJECT

let studentDetail = {
    fname: 'Nayan',
    lname: 'Vekariya',
    mobileno: String('9510928990'),
    HSC: String('82.90%'),
    BCA: String('7.9'),
    weight: [40,45,47,50]
}

console.log(studentDetail);
console.log(studentDetail.mobileno);    // perticular 1-1 date fatch from object
console.log("My Weight :",studentDetail.weight);





