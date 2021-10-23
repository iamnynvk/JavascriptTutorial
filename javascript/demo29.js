console.log("Tutorial 29 : Asynchronous Programming");

/*
Note : 
- Asynchronous model allow karta hai multiple things at same time - milk leva gaya chhe tame aagal vadho [ye chal raha hai aage badho]
- Synchronous model thing happen one at time - Ramu bhaiya milk leva jase and then sabji leva jase [back to back - one person]

3 Type to write code of Asynchronous

1) Async/await
2) Callbacks
3) promises

*/

// simple waiting all process - this process is Synchronous.

// for (let index = 0; index < 4005; index++) {
//     const element = index;
//     console.log("Element's Are : ",element);
// }
// console.log("Done Printing");


// Process backgroud ma saru chhe tame aagal vadho - Asynchronous

setTimeout(() => {
    for (let index = 0; index < 4005; index++) {
        const element = index;
        console.log("Element's Are : ",element);
    }
}, 1000);

console.log("Done Printing");