console.log("This is Secend Tutorial");

// Vanila Javascript is Case-Sensitive

// variable in JS - store in perticular variable 
// var, let, const - assign of global & local variable

// var - var value change after initialize [Function Level Scoop] - old javascript using
// let - let value change after initialize [Block Level Scoop] - modern javascript using ES2015/E6
// const - const value dont change after initialize - modern javascript using 

var fname = `Nayan Vekariya`; //when using html tag where use backstick
console.log(fname);

var channel;
console.log(fname,channel);

channel = `NvTube watching on Youtube`;
console.log(fname,"/",channel);

var marks = 90;
console.log(fname,"/",channel,"/",marks);

// Rule for creating javascript Variable 
// 1. can not start with number
// 2. can start with letter, _ or $;
// 3. are case-sensitive


const ownerName = `Pareshbhai Vekariya`;
// const fruits; - can not do this (erorr)


var myCity = `Amreli`;  // this is global scoop
{
    let myCity = "Surat";   // this is block level scoop
    myCity = "Ahmedabad";   // after initialize again new assign value
    console.log(myCity);
}
console.log(myCity);


// Array is collection of similar data (Number,String ect.)
// Const Array value PUSH/POP are action are perform 

const arr1 = [10,20,30,40,50];
// arr1 = [99,88];  You cant do that 

arr1.push(60);  // pushing value in array
arr1.pop(); // last Value remove in array

console.log(arr1);
console.table(arr1);


/*  Most Common programming case type :
JavaScript Language is CapitalCase Language
    1. camelCase - first letter SMALL and then after CAPITAL
    2. kebab-case - in using '-' 
    3. snack_case - in using '_'
    4. PascalCase - first letter CAPITAL and the after CAPITAL

*/