console.log('Tutorial 31 for POST AJAX HTTPs request & Data');

let fatchBtn = document.getElementById('fatchBtn');
fatchBtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler(){
    console.log("click and Fatch Data");

    // Create here xhr Object
    const xhr = new XMLHttpRequest();


    // Use this for Post Request
    //Open the Object (firstParameter : GET,POST)(secendParameter : anyFile/URL)(thirdParameter : if you use Async - true / Sync - false)

    xhr.open('POST','https://gorest.co.in/public/v1/users',true);
    // xhr.getResponseHeader('Content-type','application/x-www-form-urlencoded'); for URL ENCODED Form
    xhr.getResponseHeader('Content-type','application/json');
    

    xhr.onload = function(){
        console.log('Xhr is Load...');
    }
    xhr.onprogress = function(){
        //console.log(xhr.responseText);
    }

    // Last main Apko Send bhi karna hai
    postDetail = `{"name":"Nayan","salary":"500","age":"23","address":"america"}`;
    xhr.send(postDetail);
    console.log('All Process is Done');


}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click',popButtonHandler);

function popButtonHandler(){
    console.log("click and PopHandler Data");

    // Create here xhr Object
    const xhr = new XMLHttpRequest();


    // Use this for Post Request
    xhr.open('GET','https://gorest.co.in/public/v1/posts',true);
    xhr.getResponseHeader('Content-type','application/json');
    

    xhr.onload = function(){
        if(this.status === 200){
            
            let obj = JSON.parse(this.responseText);
            let n = obj.data;
            let list = document.getElementById('list');
            console.log(n);

            for(let i=1;i<=n.length;i++){
                let titles = n[i].title;
                console.log(titles);

                let uiString = `<li>${titles}</li>`;
                list.innerHTML += uiString;
            }

        }else{
            console.log('some error occured');
        }
    }

    xhr.send();

}
