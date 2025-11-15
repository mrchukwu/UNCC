// const fs = require('fs');

// const content = fs.readFileSync('./text.txt', 'utf-8');

// console.log(content);       

//3 different ways of doing the samething using Promise API, callbacks APi and Synchronous API

//Promise API
// const fs = require('fs/promises');

// (async () => {
//     try{
//         await fs.copyFile("./text.txt", "copied-promise.txt");

//     }catch(err){
//         console.error("Error occurred while copying the file:", err);
//     }
// })();


// //Callbacks API
// const fs = require('fs');

// fs.copyFile("./text.txt", "copied-callback.txt", (err) => {
//     if(err){
//         console.error("Error occurred while copying the file:", err);
//     }
// })


//Synchronous API
const fs = require('fs');

fs.copyFileSync("./text.txt", "copied-sync.txt");
