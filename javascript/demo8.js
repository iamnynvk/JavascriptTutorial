console.log("Tutorial 8 : If-Else Condition & Switches in Javascript");

// Basic If-else Statement
const age = 18;

if(age>18){
    console.log("You can Vote");
}else{
    console.log("You can't Vote");
}

// else-if Statement - if you have 1000 condition you dont write else if [all the condition check]
// you write else-if whenever condtion break stop the if else condtion

if(age>18){
    console.log("You can Vote");
}
else if(age==18){
    console.log("You can Vote But Your age is 18 Please Wait 1 year");
}
else{
    console.log("You can't Vote");
}

// check variable is define or not
let vari = 34;

if(typeof(vari) !== "undefined"){
    console.log("Variabel define");
}else{
    console.log("Variable not Define");
}

// Boolean checking if-else

let isDrive = true;

if(isDrive && age<=18){
    console.log("You can Drive");
}else{
    console.log("You can not Drive");
}

let retireAge = 60;
let isRetire = false;

if(isRetire || retireAge<=60){
    console.log("You can Retire");
}else{
    console.log("You can able for work");
}

// ternay condition
let currentYear = 2021;
console.log(currentYear>2020 ? "Current Year is 2021":"Current year is not 2020");

// switch-case

switch (age) {
    case 18:
        console.log("Your age is 18");
        break;
    case 19:
        console.log("Your age is 19");
        break;
    case 20:
        console.log("Your age is 20");
        break;
    default:
        console.log("Sorry! invalid age");
        break;
}