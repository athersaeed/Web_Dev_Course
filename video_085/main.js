// // const { createServer } = require('node:http');
// // const fs = require("fs")
// import http from "http" 

// // named exports need type module
// import {a, b, d} from "./mymodules.js"
// console.log(a,b,d);

// // default exports
// import any_name_does_not_have_to_obj from "./mymodules.js"
// console.log(any_name_does_not_have_to_obj);



// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// need type commonjs
const l = require("./my_modules2.js")
console.log(l);