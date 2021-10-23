console.log('Tutorial 7 : All Type of Opeator\'s');

/* Hint - A2C2 L&T

1. Arithmetic Operators     -   +, -, *, /, %, ++, --, **
2. Assignment Operators     -   =, +=, -=, *=, /=, %=, <<=, >>=, >>>=, &=, ^=, |=, **=
3. Comparison Operators     -   ==, ===, !=, !==, >, <, >=, <=
4. Bitwise Operators        -   &, |, ~, >>, >>>, <<
5. Logical Operators        -   &&, ||, !
6. Conditional | TernaryOperator    -   ?, :

*/


// 1. Arithmetic Operators     -   +, -, *, /, %, ++, --, **

console.log("Addition : ",10+20); // pluse
console.log("Subtraction : ",20-10); // minus 
console.log("Subtraction : ",10-20); // minus
console.log("Multiplication : ",10*20); // multiplication
console.log("Division : ",10/20); // division
console.log("Remainder : ",10%2);  // remainder
console.log("Squere Root :",6**2);  // double * [Squere root]



// 2. Assignment Operators     -   =, +=, -=, *=, /=, %=, <<=, >>=, >>>=, &=, ^=, |=, **=

let a = 5;  // value assign in variable
console.log("assign value :",a);

a = a+10;   // value addition in variable
console.log("Addition :",a);

a += 10;    // value addition in variable other methord
console.log("Other methord to addition :",a);

a = a-10;    // value addition in variable
console.log("Subtraction :",a);

a -=10;      // value addition in variable other methord
console.log("Other methord to subtraction :",a);

a = a * 10;
console.log("Multiplicatio :",a);

a *= 10;
console.log("Other methord to multiplication :",a);

a = a/10;
console.log("Division :",a);

a /= 10;
console.log("Other methord to division :",a);



// 3. Comparison Operators     -   ==, ===, !=, !==, >, <, >=, <=

let value = 10;
let str = '10';


// == - [Not check to datatype only focus on value]

if(value==str){
    console.log("Values are same");
}


// === - [check to with datatype are same or not]

if(value===str){
    console.log("Value are same [1 is Number and 1 is String]");
}else{
    console.log("Value are not same beacause of datatype are change");
}


// != - [check value are same or not those called [not equals]]

if(value != 10){
    console.log("Yes! value not equal");
}else{
    console.log("No! value are equal");
}


// !== - [Check value are same or not but '==' check with datatype are same or not]

if(value !== str){
    console.log("Value or datatype are not same");
}else{
    console.log("Value or datatype are same");
}


// < - [lessthan]
console.log("Lessthan Check :",value<20);

// > - [greaterthan]
console.log("Greaterthan Check :",value>20);

// <= - [lessthan equals]
console.log("Lessthan Equal check :",value<=10)



// 4. Bitwise Operators        -   &, |, ~, >>, >>>, <<

/*
Note :
1. Using & Operator - Always return Smaller Value
2. Using | Operator - Always return Bigger Value 
3. Using ~ Operator - Change: Plus - Minus and Minus - Plus
                      [example: a=9 return -10] always 1 add
                      and then print value;
*/

let i = 6, j = 1;

// & Operator
console.log("i & j = ",(i & j));    // & - Small

// | Operator
console.log("i | j = ",(i | j));    // | - Bigger

// ~ Operator
console.log("~i = ",(~i));          // ~ - Bigger Minus

// >> Right Shift Operator
console.log("i >> j = ",(i >> j));

// >>> Zero Fill Right Shift Operator
console.log("i >>> j = ",(i >>> j));

// << Left Shift Opeator
console.log("i << j = ",(i << j));



// 5. Logical Operators        -   &&, ||, !

/*  

Notes : [Logical & Bitwise are same LOGIC ON WORK]
1. By-Default Value - False(0)
2. False Value - 0
3. True Value - 1

'AND' Table :
true	true	true            1   1   1
false	true	false           0   1   0   
true	false	false           1   0   0
false	false	false           0   0   0

'OR' Table :
true	true	true            1   1   1
false	true	true            0   1   1
true	false	true            1   0   1
false	false	false           0   0   0

'NOT' Table :
true	false                   1   0
false	true                    0   1

*/

let v=10;
console.log("Who :",v<10);

console.log(v>9 && v<11);
console.log(v>20 && v<2);

console.log(v>20 || v<2);
console.log(v<9 || v>4);

console.log(!(v>9 && v<11));
console.log(!(v<10 || v>9));


// 6. Conditional | TernaryOperator    -   ?, :

var x = 10, y =20;

var n = x < y ? y : x;
console.log(n);

if(x<y){
    console.log("Y is Bigger");
}else{
    console.log("X is Bigger");
}