console.log("Tutorial 42 : Shorthan Character classes");

// Character Classes 
// 0. +  - one or more
// 1. \w - word characters
// 2. \W - Non word character
// 3. \d - digit
// 4. \D - Non digit
// 5. \s - whitespace
// 6. \S - non WhiteSpaces
// 7. \b - word boundary
// 8. ?= - char hoy to j match thay (line 30)
// 9. ?! - char no hoy to j match karvo (line 33)

let regx = /\wan/;      // small 'w' word characters - _ or alphabets or number 
regx = /\w+b4/;         // -_aphabets,number hoy + b4 hoy    /\w+ means one or more word characters
regx = /\Wbhai/         // Capital 'W' Non word character with bhai
regx = /\W+bhai/;       // \W+ means more than one more word character
regx = /\d999/;         // \d means digit        // mane number match karavi ne aapo jeni pachal 999 hoy - koi ek digit eni pachal 999
regx = /number \d+/;    // number pachi 1 karta vadhu digits
regx = /\D999/;         // \D means koi 1 digit na hovo joiye  - "y999";
regx = /number \D+999/; // \D+ means 1 karta vadhu non digit 999 - "number hey999";
regx = /\ska number/;   // \s means space match karva mate or \t pan match kare chhe 
regx = /\s+dont/        // 1 karta vadhu space match karva
regx = /\S+bhai/;       // \S means bhai aagal ek pan space naa avvi joiye
regx = /er\b/;          // \b means 2 word vachhe ni boundary nakki kare ex. "er" pacchi new word saru thay se
regx = /dont\b/;        // dont pachi new word saru thavo joiye pan nathi thato atle match pan nahi thay


// Assertions
regx = /n(?=u)/;        // "n" pachi "u" hoy to match karo baki nai
regx = /n(?=u)\w+/;     // "n" pachi "u" hoy ane pachi game atle word hoy     
regx = /i(?!k)/;        // "i" pachi "k" no hovo joiye baki gamme te hase e chalse


let str = "naye74heb47an $$%$bhai ka number hey99999999    dontcall me abcdefghij"; 



let result = regx.exec(str);
console.log("This is Result ",result);

if(regx.test(str)){
    console.log(`This is String ${str} match the expression ${regx}`);
}else{
    console.log(`This is String ${str} Does not match the expression ${regx}`);
}
