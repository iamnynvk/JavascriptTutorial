console.log(
  "Tutorial 23 : Object Oriented Javascript in Object Litetals, Constructors"
);

// Object Literals for creating objects
let car = {
  carName: "Maruti 800",
  topSpeed: 90,
  run: function () {
    return "Car is Running..";
  },
};
console.log(car);

/*
constructor : constructor ek template hota hai, jiski madad se aap 'Object' create kar sakte ho 
'new' keyword new object banata hai constructor ki madad se */

// we have already seen constructor like these :
// new Date();

// creating a constructor for cars

function generalCar(givenName, givenSpeed) {
  this.carName = givenName;
  this.topSpeed = givenSpeed;
  this.run = function () {
    return `${this.carName} is running...babes`;
  };
  this.analysis = function () {
    return `This car is Slower by ${200 - this.topSpeed} km/H than Mercedes`;
    // return `${this.carName} is slower by maruti Alto`;
  };
}

let carOne = new generalCar("Hundai", 120);

carOne = new generalCar("Nisaan", 200);

carOne = new generalCar("Murcides", 300);

carOne = new generalCar("TATA", 80);

carOne = new generalCar("SUZUKI", 150);

carOne = new generalCar("i10", 100); // avi rite lot of same name par object hoy to last ma je store thay te no data store thase

let carTwo = new generalCar("Hundai", 120);

let carThree = new generalCar("Nisaan", 200);

console.log(carThree);
