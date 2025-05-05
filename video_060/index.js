console.log("This is JS String Tutorial");

let a = "Harry";

console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a.length)

let real_name = "Ather"
let friend = "Yasir"

console.log(`His name is ${real_name} and his friend name is ${friend}`)

console.log("hi \nnewline \' apostrophe \t tab \rreturn")

let b = "Bilal"

console.log(b.toLowerCase())

console.log(b.slice(1,4).toUpperCase())           // ILA

console.log(b.slice(1))                         // ilal

console.log(b.replace("I".toLowerCase(), "77")) // B77lal

console.log(b.replace("l", "77"))               // Bi77al (only first occurence)

console.log(b.concat(a, "Aisha"))