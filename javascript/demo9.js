console.log("Tutorial 9 : For, While & Do While Loop in JavaScript");

/*
what is loop ?
loop apne aap main ek instruction hota hai jo apne aap ko 
repeat karta rehta hai jab tak koi specific condition false
declare na ho jayye


Three type of Loop
1. For Loop
2. While Loop
3. Do-While Loop

two statement
- Break
- Continue

*/

// 1. For Loop - for(Initialize&Declaration ; Condtion ; Increment/Decrement)
/*
for(let i=0;i<=10;i++){
    console.log(i);
    //i++;
}
*/

// 2. While Loop - First check condition and then enter the loop section
/*
let i = 0;
while(i<10){
    console.log(i);
    i++;
}

// false condition not working
let j = 110;
while(j<10){
    console.log(j);
    j++;
}

// reverse print 
let k = 110;
while(k>10){
    console.log(k);
    k--;
}
*/

// 3. Do While Loop - First run Do section and then Check condtion true or false

/*
// first condtion not check direct execute do section and then check condtion
let i = 10;
do{
    console.log(i);
    i++;
    console.log(i);
}while(i<10)

// Normal printing using while loop
let j = 0;
do{
    j++;
    console.log(j);
}while(j<10);

*/

/*
// Break Statement
let i = 0;
do{
    i++;
    if(i===5){
        break;  //jo loop chal raha hai use vahi se stop kar do
    }
    console.log(i);
}while(i<10)
console.log("done");
*/

/*
// Continue statement
let i = 0;
do{
    i++;
    if(i===5){
        continue;  //jo loop chal raha hai use bhul jaao aur aage badh jao
    }
    console.log(i);
}while(i<10)
console.log("done");
*/

// For-Each with function

// 1. first methord - is dificult tradition way

let arr = [2,4,5,6,7,8];
// for(let i=0;i<=arr.length;i++){
//     const element = arr[i];
//     console.log(element);
// }

// 2. secend methord - is eassy modern way

arr.forEach(function(element, index, array){
    console.log(`Element is ${element} | Index Of ${index} | array is ${array}`);
});


// How can be itrate of object 
var obj1 = {
    name:'Nayan',
    age:20,
    current_doing:'MCA',
    goal:'Run Company'
}

//  Itrate this Object 
for(let key in obj1){
    console.log(`this Object is ${key} and Value is ${obj1[key]}`);
}