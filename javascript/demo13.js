console.log("Tutorial 13 : HTML Tag Selector's ");

/* 
DOM - Document Object Model

(*) Two type of Element Selector

1> Single Element Selector  -   only One element select
2> Multiple Element Selector -  Multiple element Select

* Single Element Selector
    - getElementById()
    - getElementByClass()

* Multiple Element Selector
    - getElementsByClassName()
    - getElementsByTagName()
*/

// 1. Single Element Selector

// var datas = document.getElementById('secend')
// console.log(datas);

// datas.children;

// datas.style.border=5;

// datas.style.color='green';

// datas.style.alignItems='center';

// datas.style.justifyItems='center';

// datas.innerText = "Hey My Name is Nayan Vekariya";

// let sel = document.querySelector('#first');
// console.log(sel);

// let cl = document.querySelector('.child2');
// console.log(cl);


// 2. Multiple Element Selection

let ele = document.getElementsByClassName('child');

ele = document.getElementsByClassName('container');
// console.log(ele[0].getElementsByClassName('child'));

ele = document.getElementsByTagName('div');
console.log(ele);

// 1st methord itrate this loop
Array.from(ele).forEach(function(element){
    element.style.color = "red";
})

// 2nd methord itrate this loop
for(let i=0;i<=ele.length;i++){
    const element = ele[i];
    console.log(element);
}