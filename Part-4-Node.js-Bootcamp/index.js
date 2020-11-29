// const name = require("./name.js"); // mencari file nya ada dimana

// name();

const myprofile = require("./name.js");
const path = require("path"); // untuk mengambil dari satu modul
//console.log(myprofile.hobby); // ngambil 1 object
console.log(myprofile);

// (function(exports, require, module, __filename. __dirname) {
//     in here
// })

console.log(__filename); // kalo file name itu udh include sama file name nya
console.log(__dirname);

const fileLocation = path.join(__dirname, "index.js");
const fileName = path.basename(__filename);
console.log(myprofile);
console.log(fileLocation);
console.log(fileName);
