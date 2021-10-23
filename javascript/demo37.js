console.log("Tutorial 37 : Error Handling & Try Catch in Javascript");

// How to Handle Error in Javascript
// Mani lo ke names ek server thi aave che fetchAPI thi lavya siye te name
// Making a custome error

let names = "Nayan";
names = undefined;
if (names != undefined) {
    throw new Error("This is not undefined");
} else {
    console.log("This is undefined");
}

try {
    //kjklsdfkklj
    console.log("We are inside try block");
    functionNyn(); // Jyare try section wrong hoy ne tyare catch section exicute thay
} catch (error) {
    console.log("Are you Ok !" + error.name);
    console.log(error.message);
    console.log(error);
} finally {
    // Finally - chahe try ho ya catch but always execute finally block
    console.log("This is Finally Section");
}
