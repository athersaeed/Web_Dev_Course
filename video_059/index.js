// My solution

// function calc(a, c, b) {
//     rnd = Math.random();
//     if (rnd < 0.1) {
//         if (c === "+") {
//             c = "-"
//         } else if (c === "*") {
//             c = "+"
//         } else if (c === "-") {
//             c = "/"
//         } else if (c === "/") {
//             c = "**"
//         }
//     }
//     if (c === "+") {
//         return a + b
//     } else if (c === "-") {
//         return a - b
//     } else if (c === "*") {
//         return a * b
//     } else if (c === "/") {
//         return a / b
//     } else if (c === "^") {
//         return a * b
//     }
// }

// for (let i = 0; i < 10; i++) {
//     console.log("\n\n\n");

// res1=calc(2, "+", 2)
// console.log(res1);
// res1=calc(2, "-", 2)
// console.log(res1);
// res1=calc(2, "*", 2)
// console.log(res1);
// res1=calc(2, "/", 2)
// console.log(res1);
// res1=calc(2, "^", 2)
// console.log(res1);
// }



// His solutions

let rnd = Math.random();

let a = prompt(rnd + " Enter first number: ")
let c = prompt("Enter first number: ")
let b = prompt("Enter first number: ")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if (rnd > 0.1) {
    const expr = `${a} ${c} ${b}`;
    alert(`The correct result is ${eval(expr)}`);
} else {
    c = obj[c];
    const expr = `${a} ${c} ${b}`;
    alert(`The faulty result is ${eval(expr)}`);
}