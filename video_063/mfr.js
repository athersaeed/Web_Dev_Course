let arr = [1,13,5,7,11]

// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newArr.push(element**2)
// } 
// can also be written as
// 

let newArr = arr.map((e, index, arr)=>{
    return e**2
})
console.log(newArr)

const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}

arr.filter(greaterThanSeven)
console.log(arr.filter(greaterThanSeven))

let arr2 = [1,2,3,4,5,6]

const red = (a,b)=>{
    return a+b
}

console.log(arr2.reduce(red))


console.log(Array.from("Harry"))
