console.log('Tutorial 40 : In Deep Regular Expression');


let regx = /nayan/i;
// Meta-Cherecter Symbols
regx = /^H/     // ^ --> sentence startWith
regx = /me$/    // $ --> end to $ means check endsWith
regx = /na.an/  // . --> jya . hoy tya 1 cheracters avse em (Only one Characters)
regx = /H*ow/       // * --> 0 to more match
regx = /He?llows?/  // ? --> Option character's 'e and s' both are optional
regx = /H\*llow/    // \ --> meta symbols chhe teni vaat nathi thati actual string ma * hoy to j match thase
regx = /H\$llow/    // \ --> meta symbols chhe teni vaat nathi thati actual string ma $ hoy to j match thase

let str = "H$llow Everyone My Name is nayan Vekariya and Who live nearbors of nayan Alagiya's Home";

let result = regx.exec(str);
console.log("This is Result ",result);

if(regx.test(str)){
    console.log(`This is String ${str} match the expression ${regx}`);
}else{
    console.log(`This is String ${str} Does not match the expression ${regx}`);
}


