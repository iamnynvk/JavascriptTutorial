console.log("Tutorial 18 : Old Excersize");

// This code work on "https://www.codewithharry.com/videos" site;
// in page get all link but only python link get fatch

let str = "python";
let links = document.links;
let href;

Array.from(links).forEach(function (element) {
  href = element.href;
  if (href.includes(str)) {
    console.log(data);
  }
});
