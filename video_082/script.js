async function sleep(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}
// iife
(async function main(){
    let a = await sleep()
    console.log(a);
    let b = await sleep()
    console.log(b);
})()

// destructuring
let [x,y, ...rest] = [1,5, 4,5,5,7,8]
console.log(x,y, rest);

let obj = {
    a: 1,
    b: 2, 
    c: 3
}

let {a, b} = obj
// or 
// let {a: first, b: second} = obj
// console.log(first, second)
// if you want different names while destructuring objs
console.log(a, b);

// spread syntax
function sum(num1, num2, num3){
    return num1 + num2 + num3
}

let arr = [1,4,6]
// console.log(sum(arr[0], arr[1], arr[2]));
console.log(sum(...arr));

const arr1 = [1,2,3]
const obj1 = {...arr1} // {0: 1, 1: 2, 2: 3}
console.log(obj1["0"]);


// hoisting
console.log(a1);        // undefined
// but not an error because hoisting moves the declaration to the top of the block (only works w
// functions also get hoisted unless made with const or let like
// const sum = async(a,b,c)=>{
//     return a + b + c
// }
var a1 = "hoisted"