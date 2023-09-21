const crypto = require("crypto");
// console.log(crypto); // объект функций    
// console.log(crypto.getHashes()); // массив sha...
// console.log(crypto.getCiphers()); // массив aes...

// crypto.randomBytes(16, (err, buf) => {
//     console.log(buf.toString('hex'));
// });

// let iv = crypto.randomBytes(16);

// create hash 
let hash = crypto.createHash("sha256").update("your message").digest("hex");
console.log(hash)