console.log('Tutorial 41 : Regular Expression - Characters sets');

// Regular Expression :-
    // Basic Function : exec(),test(),match(),search(),replace()
    // Metacharacter Symbols : [^ - startWith], [dem$ - endsWith], [* - 0 to more char match], [. - only one char match]
    //                         [? - optional], [\* && \$ && \# any \ after - to check as it is in string]

// const regx = /^n/i;
// * Characters Sets : []

let regx = /na[a-z]an/i;  // set banavo jema "a to z" vacche kai pan aave 
regx = /na[rruv]an/i;      // ^ --> means ke r,u,v sivay badha j character's chalse [!- not nu kaam kare se]
regx = /na[^uv]an/i;      // "ruv" mathi koi pan chale can be r, u and v
regx = /na[^ruv]a[nop]/i;   // ^ -> means ke r,u,v sivay badha and n,o,p hova joiye
regx = /Na[a-zA-Z]a[nop]/; // small a to z and Capital a to z 
regx = /Na[a-zA-Z]a[no0-9]/; // small a to z and capital a to z with [n,o and 0 to 9] 
regx = /Na[a-zA-Z]a[no0-9][0-9]/;   // valid : "Nara889 bhai" in string all place in 0 to 9 valid

let str = "Nara889 bhai";

// Quantifiers
regx = /nay{2}an/i;     // {2} - means that "y Quantity 2 hovi joiye" - only 2 j hovi joiye - excetly 2 time

str = "nayyan"; // is valid String
str = "nayan";  // is not valid
str = "nayyyan"; // is not valid

regx = /nay{0,2}an/i    // y - 0 to 2 vakhat avvo joiye

str = "nayyyan";    // is not valid
str = "nayan";      // is valid 
str = "nayyan";     // is valid


// Groupings - We use paranthisis for groupings() - we use  : (){}

regx = /(nay){2}([0-9]r){2}/;  // this is (nay) group and 2 times or more are valid

str = "naynay"; // is valid
str = "nay";    // is not valid
str = "naynaynay";  // is valid
str = "naynay0r3r"  // is valid if regx = /(nay){2}([0-9]r){2}/;


let result = regx.exec(str);
console.log("This is Result ",result);

if(regx.test(str)){
    console.log(`This is String ${str} match the expression ${regx}`);
}else{
    console.log(`This is String ${str} Does not match the expression ${regx}`);
}


