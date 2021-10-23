console.log("Tutorial 21 : Math Objects in Javascript");

// Exploring the Math Object
let z = Math;   // All mathamatic function store in z
console.log(z);

z = Math.PI;
z = Math.E;
z = Math.LN10;
z = Math.LN2;
z = Math.LOG10E;
z = Math.SQRT1_2;
z = Math.SQRT2;

// Ceil - Gujarati(aagasi par chadhavi dyo value ne)
z = Math.ceil(-19.78);  // -19
z = Math.ceil(-19.39);   // -19
z = Math.ceil(19.78);   // 20
z = Math.ceil(19.39);   // 20

// floor - Gujarati(taliye pahosadi dyo value ne) floor par besadi dyo
z = Math.floor(-19.78); // -20
z = Math.floor(-19.39); // -20
z = Math.floor(19.78); // 19
z = Math.floor(19.39); // 19

// round - value ne round kare
z = Math.round(19.39); // 19
z = Math.round(-19.39); //-19
z = Math.round(19.78);  //20
z = Math.round(-19.78); //-20

// abs - absolute value (- hoy to + kare )(+ hoy to + j rakhe)
z = Math.abs(-19.78);   //19.78
z = Math.abs(19.78);    //19.78

//sqrt - squre root
z = Math.sqrt(144); //12

// pow - power
z = Math.pow(2,3);  // 2*2*2 = 8

// min - get minimum value
z = Math.min(12,-10,-12,30,43); //-12

// max - get maximum value
z = Math.max(10,-20,43,76); //76


// random - get random value
z = Math.random();      // normal random value generate

/* 
    z = 0 to 1 - generate random value

    * but you want to get random value upto 100
    - z100 = (z*100) = (0 to 100) // random value generate
    
    * but you want to get random value 10 to 100
    - z10_100 = 10+z*(100-10) = (10 to 100)
*/

z = Math.random()*100;  // get random value upto 100

z = 10+Math.random()*(100-10);  // 10 to 100

z = 50+Math.random()*(100-50);  // 50 to 100

z = 90+Math.random()*(100-90);  // 90 to 100 

z = Math.ceil(90+Math.random()*(100-90));  // value (.) n leva mate



console.log(z);