console.log("Tutorial 17 : More Event's");

let button = document.getElementById('btn');

//1. methord for Event 
// button.addEventListener('click',function(e){
//     console.log("thanks",e);
// });

//2. methord for Event -  two methord are valid
// button.addEventListener('click',func1);

// function func1(e){
//     console.log("thanks Bro!",e);
// }

// whenever output is print but it was redirect to other page 
// not seen output when use " preventDefault() "

// Its vary very important of e.preventDefault() function
// click event only action perform to leftclick on mouse
button.addEventListener('click',function(e){
    console.log("thank you for Submit",e);
    e.preventDefault(); // output not gone
});


/*
Events:
1.click - only left click enter action perform
2.double click - when you left double click action perfomr
3.mousedown - left,right and wheel click action perform
4.mouseenter - when mouse on that segment action perform
5.mouseleave - when mouse outside that segment action perform
6.mousemove - perticular segment on move mouse that action perform
*/

// double click event is action on only double leftclick on action
button.addEventListener('dblclick',function(v){
    console.log("thank for double click",v);
    v.preventDefault();
});

// mousedown even action mouse wheel,righclick and leftclick on action
button.addEventListener('mousedown',function(k){
    console.log("thank for mouse down",k);
    k.preventDefault();
});


// Mouseenter
document.querySelector('.no').addEventListener('mouseenter',function(e){
    console.log("You enter class no",e);
});

// Mouseleave
document.querySelector('.no').addEventListener('mouseleave',function(e){
    console.log("You leave that class",e);
});

document.querySelector('.container').addEventListener('mousemove',function(e){
    console.log("Heading on Mouse move",e);
    console.log("screen X :",e.offsetX);
    console.log("screen Y :",e.offsetY);
    
    // 1st methord to give only one color
    //document.body.style.backgroundColor="yellow";

    // 2nd trick to give color multiple color 
    //document.body.style.backgroundColor= `rgb(${e.offsetX},${e.offsetX},${e.offsetY})`;

    // 3nd trick to give color multiple color - all color(255)
    document.body.style.backgroundColor= `rgb(${e.offsetX},${e.offsetX},140)`;

});