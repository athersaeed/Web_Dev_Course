console.log("ather is a hacker")

setTimeout(() => {
    console.log("i am in timeout with 2 sec timeout")
}, 2000);

setTimeout(() => {
    console.log("i am in timeout 2 with zero ms timeout")
}, 0);

console.log("after timeout")

// output
// ather is a hacker
// after timeout
// i am in timeout 2
// i am in timeout
// timeout is async


const callback = (arg) => {
  console.log(arg)
}


const loadScript = (src, callback) => {
  let sc = document.createElement("script")
  sc.src = src
  sc.onload = callback("callback")
  document.head.append(sc)
}

// callback is a function invoked by another function
// so we can use multiple callbacks until it becomes callback hell
// solution to callback hell is a promise
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)