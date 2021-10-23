console.log('Tutorial 33 : Promises Basic, Promise.then() and Promise.catch()');

/* Promise - resolve | reject | pending - Object hai
simple term : 
maine ke promise kiya apne papa se 
- 1. promise compelete karunga - resolve
- 2. promise karke tod dunga   - reject
- 3. promise kiya hai to nibha raha hu - pending
*/
 
function funcOne(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            const error = true;
            if(!error){
                console.log("Function : Your Promise has been resolved");
                resolve();
            }else{
                console.log("Function : Your Promise has been not resolved");
                reject("Sorry not Full-Fill");
            }
            
        }, 2000);
    });
}

//.then() - means agar callback resolve ho gaya tab main kya karungaa - resolve ne then ni under nakhvani
//.catch() - means agar callback reject hota hai to .catch() main jayegaa - reject ne catch ni under nakhvanu

funcOne().then(function(){
    console.log("Nyn : Thanks for Resolving");
}).catch(function(error){
    console.log("Nyn : Verry Bed Bro!! " + error);
});