import fs from "fs/promises"

let a = await fs.readFile("ather2.txt")

let b = await fs.writeFile("ather3.txt", "\n\n\nthis is amazing promise")

console.log(a.toString())
console.log(b)