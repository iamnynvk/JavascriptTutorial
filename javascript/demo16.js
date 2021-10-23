console.log("Tutorial 16 : Event's & Event Object");

// Heading upper event set karva
// set heaading on click
document.getElementById("heading").addEventListener("click", function (e) {
  // location.href="//www.google.com";
  let v = e.target;
  console.log(`This is Target value :`, v);
  v = e.target.className;
  console.log(`This is Class value :`, v);
  v = e.target.id;
  console.log(`This is ID value :`, v);
});

/*
// how many time to move mouse on heading
document.getElementById("heading").addEventListener("mousemove", function () {
  console.log("You have mouse_move");
});

// when on over that tag fire this event 
document.getElementById("heading").addEventListener("mouseover", function () {
    console.log("You have mouse_move");
});
*/