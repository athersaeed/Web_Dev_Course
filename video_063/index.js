let arr = [1,2,3,4,5]

console.log(arr)
console.log(typeof arr)             // prints object
console.log(arr.length)
arr[0] = 5666
console.log(arr[0])
console.log(arr[2])
console.log(arr[4])
console.log(arr.toString())
console.log(arr.join(" and "))
console.log(arr.pop())              // would return popped element (last) and remove the last element
console.log(arr.push("ather"))      // returns arr.length and new arr [1,2,3,4, 'ather']
console.log(arr.shift())            // returns 0th element and new arr [2,3,4, 'ather']
console.log(arr.unshift("bilal"))   // returns arr.length and new arr ["bilal",2,3,4, 'ather']
console.log(delete arr[4])
// console.log(delete arr[3])
console.log(arr[4])
console.log(arr.length)



a1 = [1]
a2 = [2]
a3 = [3]
console.log(a1.concat(a2,a3))       // returns [ 1, 2, 3 ] (doesnt change existing arrays)


let numbers = [1,2,3,4,5]
console.log(numbers)

numbers.splice(1,2)
console.log(numbers)
numbers.splice(1,2, 222,333)
console.log(numbers.reverse())
console.log(numbers)



