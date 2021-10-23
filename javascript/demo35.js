console.log("Tutorial 35 : Fatch API (Most Usable)");

// Web_One line(68)
let myBtn = document.getElementById('myBtn');

let content = document.getElementById('content');

// This is GET Request

// function getData(){     // Promise And Then Concept Here Use and Using Async also here....
//     console.log('Started GetData')
//     url = "xhrFile.txt";
//     fetch(url).then((response)=>{
//         console.log('Inside First Then')
//         return response.text();
//     }).then((data)=>{
//         console.log('Inside Secend Then')
//         console.log(data);
//     })
// }

function getData(){  
    console.log('GetData USIN GET METHORD')
    url = "https://api.github.com/users";
    fetch(url).then((response)=>{
        return response.json();
    }).then((datas)=>{
        console.log(datas);
        for(let i = 0; i<=datas.length; i++){
            //console.log(datas[i].url);
        }
    })
}

getData();



//**************************************************************************************************** */


// This is POST Request

function postData(){  
    console.log('postData USIN POST METHORD');
    // url = "https://gorest.co.in/public/v1/users";

    url = "	http://dummy.restapiexample.com/api/v1/create";

    data = '{"name":"test","salary":"123","age":"23"}';
    params = {
        method:'post',
        Headers:{
            'Content-Type':'application/json'
        },
        body: data // Jo data "String" hoy to JSON.stringify use karo - "String" no hoy to direct aapi do
    }
    // Avi rite pan lakhi sakay
    fetch(url).then(response => response.json())
    .then(data => console.log(data));

    // Avi rite lakhi sakay
    // fetch(url).then((response)=>{
    //     return response.json();
    // }).then((data)=>{
    //   console.log(data)
    // });

    
}

postData();