console.log("Tutorial 33b : file 32 convert into Promises into callback");

const students = [
    {name:"Nayan vekariya", subject:"React-Native"},
    {name:"Rutvik Akhaja", subject:"Javascript"}
];

function enrollStudent(student){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            students.push(student);
            console.log('new Student Enroll');
            const error = false;
            if(!error){
                resolve();
            }else{
                reject();
            }                         
        }, 1000); 
    });                
}                               

function getStudent(){
    setTimeout(() => {
        let str = '';
        students.forEach(function(element){
            str += `<li>${element.name}</li>`;
        });
        document.getElementById('students').innerHTML = str;
    }, 5000);
}

let newStudent = {name:"Savan",subject:"Python"};

// enrollStudent(newStudent).then(function(){
//     getStudent();
// }).catch(function(){
//     console.log("Some error occured!");
// })

// avi rite pan lakhi sakay

enrollStudent(newStudent).then(getStudent).catch(function(){
    console.log("Some error occured!");
})

// Function inside then is run as - resolve()
// Function inside catch is run as - reject()