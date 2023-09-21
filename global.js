console.log(global);

setTimeout(()=>{
    console.log(__dirname);
}, 2000)

setTimeout(()=>{
    console.log(__filename);
}, 1000)

console.log(process);
console.log(process.env);
console.log(process.path);
// console.log(`Hello! My name is ${process.argv[2]}`);

const url = new URL("http://google.com/path/name#hash");
console.log(url);
console.log(url.hostname);
console.log(url.href);
console.log(url.pathname);
console.log(url.hash);

console.log(process.pid); // idшник текущего процесса
console.log(process.env.NODE_ENV);
console.log(process.env.PORT);

const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.NODE_ENV);
console.log(process.env.PORT);