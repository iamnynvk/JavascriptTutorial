console.log("Tutorial 25 : Prototype Inharitance in Javascript");

const proto = {
    slogan : function(){
        return `Our Life is Wealth`;
    },

    changeName : function(newName){
        this.name = newName
    }
}

// create an object via .create(); - prototype se
// This create block object - this is best methord

const block = Object.create(proto);
block.name = "Nayan Vekariya";
block.role = "Programmer";   // you can add in object value

block.changeName("Pareshbhai Vekariya");
block.slogan("I'm Farmer");


// Under Ulternative Solution
// this create also block object
const section = Object.create(proto, {
    name : {value : "Drashti & Rensi", writable : true},    // writable true hovane karane apne section.changeName kari sakiye siye
    role : {value : "Student & Collagien"},
});
section.changeName("Justin Biebber");

console.log(block);
console.log(section);


//*******************Here Main Prototype code******************** */

// create a employee constructor
function Employee(name, salary, experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Employee ke prototype main slogan add kardo
Employee.prototype.slogan = function(){
    return `This Company is Really Good For Manufactory, ${this.name}`;
}

// create a Object 
let data = new Employee("Nayan", 25000,45);
console.log(data);

// perticular get Data 
console.log(data.slogan()); //This Company is Really Good For Manufactory, Nayan

//----------------------------


// Programmer inharit to employee consturctor
// Consturctor ko bhi inharit kiya jaa sakta hai .call ki madad se
function Programmer(name, salary, experience, language){
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Now, Prototype Inharitance Concepts Here...
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the Consturctor
Programmer.prototype.constructor = Programmer;


let newData = new Programmer("Harry", 30000, 12, "Javascript");
console.log(newData);
console.log(newData.slogan());