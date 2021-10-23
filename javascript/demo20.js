console.log("Tutorial 20 : Previous Task Code");


/**
Question : you have to create div tag and inject it into the page
which contains a heading.

whenever someone click on the div,  it should be converted into
an editable item. whenever your use click away and save note into 
localStorage.
*/

// create a div Element
let divElm = document.createElement('divElement');

let val = localStorage.getItem('text');

let text;

if(val == null){
    // how to text write
 text = document.createTextNode("This is my element, click and edit it");
}else{
    text = document.createTextNode(val);
}


divElm.appendChild(text);

// given id ,class & style using setAttribute
divElm.setAttribute('id','elem');
divElm.setAttribute('class','elem')
divElm.setAttribute('style','border:2px solid black; padding: 20px;');

let container = document.querySelector('.container');
let firstId = document.getElementById('first');

// set element perticular place by insertBefore throw
// container pachi and first id pahela
container.insertBefore(divElm,firstId);

console.log(divElm);

// addEventListener to the divElm
divElm.addEventListener('click',function(e){
    let noTextArea = document.getElementsByClassName('textarea').length;
    if(noTextArea == 0)
    {
    let html = elem.innerHTML;
    divElm.innerHTML = `<textarea id="textarea" class="textarea form-control" style="align-content: center;" row="3">${html}</textarea>`;
    }

    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur',function(){
        elem.innerHTML = textarea.value;
        localStorage.setItem('text',textarea.value);
    });
});




