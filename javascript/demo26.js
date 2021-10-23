console.log("Excersice - Prototype Inharitance");

// floor object banavano 
// floor ne inharit kari ne cake banavano chhe

function Floor(name, quantity, price){
    this.name = name;
    this.quantity = quantity;
    this.price = price;
}

Floor.prototype.Quality = function(){
    return `${this.name} Quality is Really Good For Health`;
};

const floors = new Floor("Besan", 24, 120);
console.log(floors);
console.log(floors.Quality());

function Cake(name, quantity, price, shop){
    Floor.call(this, name, quantity, price);
    this.shop = shop;
}

Cake.prototype = Object.create(Floor.prototype);

Cake.prototype.constructor = Cake;

let cakeData = new Cake("Mango", 1, 1000, "Shree Hari Cake Shop");
console.log(cakeData); 