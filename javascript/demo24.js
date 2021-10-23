console.log("Tutorial 24 : Object's Prototypes");
// simple language : mane panir-thali aapo
// personalData ye panir se & teni sathe by default dal-rotli aave
// ye already template ma se j means ke prototype se - tamare only use karvano chhe!

// Object literal's
var personalData = {
    name : 'Nayan',
    address : 'Haripar',
    mobileno : 9105584339
    //example : personalData - 
}
//console.log(obj);

//  what is prototype ?
//->  prototype means ke kyathi tame object ne saru kari ne ene tame banavyo

function data(givenName){
    this.name = givenName;
}

let fatch = new data("Nayan");
console.log(fatch);

// object na prototype ni under getName
data.prototype.getName = function(){
    return this.name;
}

data.prototype.setName = function(newName){
    return this.name = newName;
}