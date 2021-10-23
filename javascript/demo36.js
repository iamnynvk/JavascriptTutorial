console.log("Tutorial 36 : Async/Await Here..");

// jyare function aagal async lagavo atle promise return kare che!
// Async return promise (kasam khay ke hu pacchi kaam purn karish)
// await - tyare function wait and come on work next process and that function working in background 

// Normal Function
// function func(){
//     return "Nayan Vekariya";
// }

// Same Function

// Async function like
// async function func(){
//     const response = await fetch("https://api.github.com/users");
//     console.log("Before response");
//     const user = await response.json();
//     console.log("user resolves");

//     for(i=0;i<=user.length;i++){
//         console.log(user[i]);
//     }
// }

// console.log("Before Calling Function");
// let a = func();
// console.log("after Calling Function");
// console.log(a);
// a.then((data) =>{
//     console.log(data);
// });

// console.log("Last line of this Function");


async function getData(){
    const resp = await fetch("https://api.github.com/users");
    const usr = await resp.json();
    console.log(usr);
}

let v = getData();
v.then((otherData)=>{
    console.log(otherData);
});

