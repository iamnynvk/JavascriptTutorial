console.log("Tutorial 10 : Function In Javascript");

/*
What is Function ?
Function is block of code,
jise desine kiya jata hai perticular task to karne ke liye
*/


// Greeting Setting Hour 
let time_date = new Date();
console.log(time_date);

let getCurrentHour = time_date.getHours();
console.log(getCurrentHour);

if(getCurrentHour>7 && getCurrentHour<12){
    console.log("Good Morning Baby!");
}else if(getCurrentHour>12 && getCurrentHour<17){
    console.log("Good afterNoon Baby!");
}else if(getCurrentHour>17 && getCurrentHour<19){
    console.log("Good Evening Baby!");
}else{
    console.log("Good Night Baby!");
}


//This is Not Function
let name = ['Nayan','Rutvik','Himakshi','Akash','Deep','Shreya','Yamini','Bhargavi'];

// name.forEach(element => {
//     console.log(`Many many returns of the day! Happy Birthday ${element}`);
// });



// ********* THIS IS FUNCTION SECTION HERE**********
/*

function wishes(name,thanks){
    console.log(`Many Many Return of the day! Happy Birthday ${name} & For ${thanks}`);
    return name;
}

let friend1 = 'Nayan Vekariya';
let friend2 = 'Rutvik Akhaja';
let friend3 = 'Himakshi Nimje';

// console.log(wishes(friend1,'Thank You Brother'));
// console.log(wishes(friend2,'Thank You Ji'));
// console.log(wishes(friend3,'Thank You haa!'));

let valReturn1 = wishes(friend1);
console.log(valReturn1);

let valReturn2 = wishes(friend2");
console.log(valReturn2);

let valReturn3 = wishes(friend3");
console.log(valReturn3);

*/

// ********* THIS IS FUNCTION WITH FOR-EACH LOOP **********

/*
function wishes(name,thanks){
    console.log(`Many Many Return of the day! Happy Birthday ${name} & For ${thanks}`);
    return name; // return name pass and other line arrive under greeting
}

let friends = ['Nayan Vekariya','Rutvik Akhaja','Himakshi Nimje'];
let returnGreeting = ['Thank You Brother','Thank You Ji','Thanks a lot'];

friends.forEach(function(element){
    console.log(wishes(element,"Thank a lot"));
});
*/

// friends.forEach(function(element){
//     returnGreeting.forEach(function(returnThanks){
//         console.log(wishes(element,returnThanks));
//     });
// });


// ********* THIS IS FUNCTION IN OBJECT **********

/*
const obj = {
    name:'Nayan Vekariya',
    collage: function(){
        return "GLS UNIVERSITY";
    },
    mobileno: 9510925458,
    addree: function(){
        return "Village: Haripar, Ta.: Liliya, Di.: Amreli"
    }
}

console.log(obj.collage());     // This is function so .collage() to fatch data
console.log(obj.name);          // this is not function so .name direct to fetch data
console.log(obj.mobileno);
console.log(obj.addree());

*/

// ********* THIS IS ARRAY WITH LOOP **********

/*
let fruit = ['Apple','Banana','Cherry','Mango',123];

fruit.forEach(function(element,index){
    console.log(`Element : ${element} | Index : ${index}`);
})
*/


// ********* THIS IS FUNCTION FULLY EXPLAIN **********

// var - var has function level scoop [Global Level Scoop]
// let & const - let & const has block level scoop

/*
var i = 10;
let name = 'Nayan Vekariya';

console.log("Local Variable Access :",i);

function check(data,value){
    i = 20;
    console.log(i);
    console.log(name);
    console.log(value)
    console.log(data);
    return `My name is ${data} and My Local Scoop Age is ${i} and Out Scoop Age is ${value}`;
}

console.log(check(name,i));
console.log("Globally Change :",i)
*/

let i = 2;

if(1){  
let i = 2000;   // let - block level scoop
console.log(i);
}

console.log("Local Variable Access :",i);   // globally let

function check(value){
    let i = 10;
    console.log(i);     // let - block level
    console.log(value)  // gloabally let fatching here!!
    return `My Local Scoop Age is ${i} and Out Scoop Age is ${value}`;
}

console.log(check(i));
console.log(i);     // globally let here 
