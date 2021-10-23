/*Input :

likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"

Code :
*/

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

function likes(names) {
  switch(names.length){
    case 0:
      return "no one likes this";
    case 1:
      return names[0] + " likes this";
    case 2:
      return names[0] + " and " + names[1] + " like this";
    case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    default: 
      return names[0] + ", " + names[1] + " and " + (names.length-2) + " others like this";
  }
}

console.log(likes([]));
console.log(likes(['Peter']));
console.log(likes(['Jacob','Alex']));
console.log(likes(['Max','John','Mark']));



/*Input :

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

Code :
*/

function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/ ) || []).length;
}


/*Input :

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Code)
1 -->  1
2 --> 3 + 5 = 8
3 --> 3 + 5 + 7 = 15


assert.strictEqual(rowSumOddNumbers(1), 1);
assert.strictEqual(rowSumOddNumbers(42), 74088);

Code :
*/

function rowSumOddNumbers(n){
    return Math.pow(n,3);
}   


/*Input :
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

Code :
*/

function filter_list(l) {
  return l.filter(v => typeof v == "number");
}

/*Input :
filter_list([1,2,'a','b']) == [a,b]
filter_list([1,'a','b',0,15]) == [a,b]
filter_list([1,2,'aasf','1','123',123]) == [aasf]

Code :
*/

function filter_list(l) {
  return l.filter(v => typeof v == "string");
}


/*Input :
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

Code :
*/

function order(words){
  return words.split(' ').sort(function(a,b){
    return a.match(/\d/) - b.match(/\d/);
  }).join(' ');
}

//reverse string - T4est 3a is2 Thi1s
function lines(words){
  let str =  words.split(" ").sort(function(a,b){
      return a.match(/\d/) - b.match(/\d/);
  }).reverse().join(" ");

  return str;
}


/*Input :
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

"bitcoin take over the world maybe who knows perhaps"), 3

Code :
*/


function findShort(s){
  const stringArray = s.split(" ");
  const orderedArray = stringArray.sort((a, b) => {
    return a.length - b.length;
  });
  return orderedArray[0].length;
}

/*Input :
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the Code should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

Code :
*/

function toCamelCase(str){
  return str.split(/[,_-]+/).map((s, i) => i !== 0 ? s.charAt(0).toUpperCase() + s.slice(1) : s).join('');
}



/*Input :
spinWords("Hey fellow warriors") => "Hey wollef sroirraw" 
spinWords("This is a test") => "This is a test" 
spinWords("This is another test") => "This is rehtona test"

Code :
*/

function spinWords(sentence){
  const sentenceArray = sentence.split(' ');
  let result = '';
  sentenceArray.map((str, i) => {
    if (str.length >= 5){
      sentenceArray[i] = str.split('').reverse().join('');
    } else {
      sentenceArray[i] = str;
    }
  result = sentenceArray.join(' ');
  });
return result;
}

function spinWords(string){
  return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}

function spinWords(str){
  return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
}


/*Input :
A Narcissistic Number is a positive number which is the sum of its own digits,
each raised to the power of the number of digits in a given base. In this Kata,
we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

Code :
*/

function narcissistic(value) {
  let m = 1, count = 0;
  while(value / m > 1){
     m *= 10;
     count++;
  };
  let sum = 0, temp = value;
  while(temp){
     sum += Math.pow(temp % 10, count);
     temp = Math.floor(temp / 10);
  };
  return sum === value;
}

// Other logic
function narcissistic( value ) {
  return ('' + value).split('').reduce(function(p, c){
    return p + Math.pow(c, ('' + value).length)
    }, 0) == value;
}


/*Input :

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"

Code :
*/

const findMissingLetter = (array) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const start = alphabet.indexOf(array[0]);
  return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
};


/*Input :

The main idea is to count all the occurring characters in a string. If you have a string like aba, 
then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

Code :
*/

function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}


/*Input :

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"

Code :
*/

function domainName(url){
  return  url.replace('http://', '')
             .replace('https://', '')
             .replace('www.', '')
             .split('.')[0];
}

/*Input :

scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

Code :
*/

function scramble(str1, str2) {
  var array1 = str1.split("").sort();
  var array2 = str2.split("").sort();
  var i = 0;
  for(var x = 0; i<array2.length && x<=array1.length; x++) {
      if(array2[i] === array1[x]) {
          i++;
      }
  }
  return (x <= array1.length);
}

/*Input :

alphabetPosition("The sunset sets at twelve o' clock.")
output : "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

Code :
*/

// other logic
function alphabetPosition(text) {
  return text.toLowerCase().split('').map(a => a.charCodeAt(0) - 96).filter(a => a > 0 && a < 27).join(' ');
}

// other logic
function alphabetPosition(text) {
  let str = text.toLowerCase();
  let a = "";

  for (let i = 0; i < str.length; i++) {

      if (str.charCodeAt(i) - 96 > 0 && str.charCodeAt(i) - 96 <= 26) {
        a+= str.charCodeAt(i) - 96 + ' ';
      }
    }
    return a.trim();
}


/*Input :

songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
  // =>  WE ARE THE CHAMPIONS MY FRIEND

Code :*/

function songDecoder(song){
  return song.split('WUB').filter(Boolean).join(' ');
}


/*Input :
iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

Code :*/

function iqTest(numbers){

  numbers = numbers.split(" ").map(function(el){
    return parseInt(el)
  });
  
  var odd = numbers.filter(function(el){
    return el % 2 === 1
  });
  var even = numbers.filter(function(el){
    return el % 2 === 0
  });
  
  return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}

/*Input :

GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

Code :*/

function getSum( a,b )
{
   if(a==b){
     return a;
   }
  if(a < b){
    return a + getSum(a+1, b);
  }else{
    return a + getSum(a-1,b);
  }
}


/*Input :

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10

Code :*/

function nbYear(p0, percent, aug, p) {
  let percentage = percent/100;
  let val = 0;
  while(p0<p){
    p0 = p0 + p0 * percentage + aug;
    val += 1;
  }
  return val;
}


/*Input :

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']

Code :*/

function solution(s){
   return (s+"_").match(/.{2}/g)||[]
}


/*Input :

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Code :*/

function digPow(n, p){
  let k = n.toString().split('').map(function(elem,index){
    return Math.pow(elem,index+p);
  }).reduce(function(prev,curr){
    return prev+curr;
  })/n;
  
  return Number.isInteger(k) ? k : -1;
}

function digPow(n, p) {
  var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
  return x % n ? -1 : x / n
}


/*Input :
ATM PIN

"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

  Test.assertEquals(validatePIN("1"),false, "Wrong output for '1'")
    Test.assertEquals(validatePIN("12"),false, "Wrong output for '12'")
    Test.assertEquals(validatePIN("123"),false, "Wrong output for '123'")
    Test.assertEquals(validatePIN("12345"),false, "Wrong output for '12345'")
    Test.assertEquals(validatePIN("1234567"),false, "Wrong output for '1234567'")
    Test.assertEquals(validatePIN("-1234"),false, "Wrong output for '-1234'")
    Test.assertEquals(validatePIN("1.234"),false, "Wrong output for '1.234'")
    Test.assertEquals(validatePIN("-1.234"),false, "Wrong output for '-1.234'")
    Test.assertEquals(validatePIN("00000000"),false, "Wrong output for '00000000'")
  });
  
  it("should return False for pins which contain characters other than digits", function() {
    Test.assertEquals(validatePIN("a234"),false, "Wrong output for 'a234'")
    Test.assertEquals(validatePIN(".234"),false, "Wrong output for '.234'")

  it("should return True for valid pins", function() {
    Test.assertEquals(validatePIN("1234"),true, "Wrong output for '1234'");
    Test.assertEquals(validatePIN("0000"),true, "Wrong output for '0000'");
    Test.assertEquals(validatePIN("1111"),true, "Wrong output for '1111'");
    Test.assertEquals(validatePIN("123456"),true, "Wrong output for '123456'");
    Test.assertEquals(validatePIN("098765"),true, "Wrong output for '098765'");
    Test.assertEquals(validatePIN("000000"),true, "Wrong output for '000000'");
    Test.assertEquals(validatePIN("123456"),true, "Wrong output for '123456'");
    Test.assertEquals(validatePIN("090909"),true, "Wrong output for '090909'");

Code :*/

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}


function validatePIN (pin) {
  const checkLength = pin.length === 4 || pin.length === 6;

  const numMatch = /^[0-9]/g
  var er = /^-?[0-9]+$/;
  
  if(er.test(pin)){
    if (checkLength && pin.match(numMatch)){
      return true;
    }
  }
  return false;
}

