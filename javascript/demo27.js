console.log("Tutorial 27 : ES6 Classes and Inharitance");

// Class is blueprint & tamplate hoy
 
class Employee{
    constructor(givenName,givenExperience,givenDivision){
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    slogan(){
        return `i am ${this.name} and this company is best`;
    }
    joiningYear(){
        return 2009 - this.experience;
    }

    static addTwoNum(a,b){      // this is static class bina object se aap use use kar sakte hai
        return a+b;
    }
}
// Here Inharitance 
class Programmer extends Employee{
    constructor(givenName,givenExperience,givenDivision,Language,Github){
        //Employee.call(this, givenName, givenExperience, givenDivision);  // other methord to inharit constructor using 'call';

        super(givenName, givenExperience, givenDivision);  // 'Super'Means ke pachhal na class no constructor
        this.Language = Language;
        this.Github = Github;
    }

    fav_Language(){
        if(this.Language == "Python"){
            return "Python Your Fav Language";
        }else{
            return "Javascript is Your Fav Language";
        }
    }
    
    static Multi(a,b){
        return a*b;
    }
}


const empData = new Employee("Nayan Vekariya",2,"Programmer");

console.log(empData);
console.log(empData.slogan());
console.log(empData.joiningYear());     // 2007
console.log(Employee.addTwoNum(10,20)); // 30

const proData = new Programmer("Harry",10,"Programmer","Python","iamnynvk");
console.log(proData);
console.log(proData.fav_Language());
console.log(Programmer.Multi(10,20));

