const fs = require("fs")

// console.log(fs)

console.log("starting")
// fs.writeFileSync("ather.txt", "Ather is a good programmer.")
fs.writeFile("ather2.txt", "Ather is a good programmer2", ()=>{
    console.log("Done")
    fs.readFile("ather2.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})


fs.appendFile("ather2.txt", "FAXXX", (e,d)=>{
    console.log(d)
})
console.log("ending")