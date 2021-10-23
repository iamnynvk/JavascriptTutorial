console.log("Tutorial 34 : Arrow Function Here..");

// Simple Function And Simple Arrow Function

// Simple Function
function simpleFun(){
    console.log('This is Simple Function');
}
simpleFun();

// Arrow Function
arrowFun = () =>{
    console.log('This is Arrow Function');
}
arrowFun();


// Assign Variable With Fuction Simple and Arrow

const newSimple = function(){
    console.log('Assign Variable in Simple Variable');
}
newSimple();

const newArrow = () =>{
    console.log('Assign Varible in Arrow Function');
}
newArrow();

const greeting = () => console.log("Good Morning");
greeting(); 

// return object
const Obj = () => ({names:"Nayan"});
console.log(Obj);


const greet = (grt) => "Good Morning " + grt;
console.log(greet('Nayan'));