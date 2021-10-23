console.log('Tutorial 32 : Function Callback')

/*
what is callback function ?
- Async means all process are running in background when process are complete then thay print it. but all process are running not stoping
- Callback function means function ke under function hota hai.
aage hamne callback function dekha hai
example (line 10)
*/
// students.forEach() // forEach ek khud ek function se and teni under 1 bijo function ley chhe tene callBack function kahevay
// setTimeout(()=>{},timeout); - aa pan ek callback function chhe. 

// student data aanuman kari lyo ke server thi aave se
const students = [
    {name:"Nayan vekariya", subject:"React-Native"},
    {name:"Rutvik Akhaja", subject:"Javascript"}
];

function enrollStudent(student,callback){
    setTimeout(() => {
        students.push(student);
        console.log('new Student Enroll');
        callback();             // callback(); - jyare result malse tyare show thase time according apne ene set kari sakiye
    }, 5000);                   // callback function ye function ne pakdi ne rakhse jya sudhi set time according
}                               

function getStudent(){
    setTimeout(() => {
        let str = '';
        students.forEach(function(element){
            str += `<li>${element.name}</li>`;
        });
        document.getElementById('students').innerHTML = str;
    }, 1000);
}

let newStudent = {name:"Savan",subject:"Python"};
enrollStudent(newStudent,getStudent);              // Enroll Student hone main 5 sec lagege or ye Async hoga 

getStudent();                           // but ye getstudent function pahele print karke dede gaa

