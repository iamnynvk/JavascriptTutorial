console.log('Tutorial 19 : Local & Session Storage in Javascript');

// localStorage - not empty 
// sessionStorage - every time browser's close sessionStorage is empty
//                - browser bandh thay atle session expire thay jai atle ke session bandh thai jai
 
//*************************LOCAL STORAGE********************* */

// check to localStorage length
let locl = window.localStorage;
// console.log(locl);

// how to add localStorage 
localStorage.setItem('Name',"Nayan Vekariya");
console.log(locl);

localStorage.setItem('RollNo',"B62");
console.log(locl);

// how to fatch perticular data one by one
console.log(locl.Name);
console.log(locl.RollNo);

// using function localStorage.getItem
let names = localStorage.getItem('Nafdgfdme');  // No store data return null
console.log(names);

let rollno = localStorage.getItem('RollNo');
console.log(rollno);

// how to clear localStorage.clear();
//localStorage.clear();   //once clear localStorage you cant access previous data
console.log(locl.Name); // so undefined return here


// how to perticular one data clear in localStorage
locl.removeItem('RollNo');

// how to add Array in localStorage
let data = ["nyn","Gls University","MCA",2020];

localStorage.setItem("personalData",data);  // store in string 
console.log(locl.personalData); // return into string 

// BUT you want to store in Array Format - you can use
let newData = ["Nayan Vekariya","Singing","White","MCA"];
localStorage.setItem("otherData",JSON.stringify(newData));  // Now here is String store in localStorage

// Now I can retrive data in Array formate
newData = JSON.parse(localStorage.getItem("otherData"))
console.log(newData);


//*******************SESSION STORAGE********************* */

// localStorage and sessionStorage are same commands

// how to set Item in session storage 
sessionStorage.setItem("Name","Nayan Vekariya");
sessionStorage.setItem("Birthday","12/07/2000");
sessionStorage.setItem("Collage Name","GLS University")

console.log("Here below Session Storage Start");
console.log(sessionStorage.getItem("Collage Name"));
console.log(sessionStorage.getItem("Name"));

let obj = {
    Name: "Vekariya Nayan",
    Rollno: "B62",
    Course: "MCA"
}

sessionStorage.setItem("datas",JSON.stringify(obj));

let datas = JSON.parse(sessionStorage.getItem("datas"));
console.log(datas);



