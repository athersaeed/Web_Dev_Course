console.log('this is promis');

// let prom1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('yes i am done');
//         resolve("ather")
//     }, 3000);
// }
// )

// prom1.then((a) => {
//     console.log(a);

// }
// )



// so resolve("ather") was invoked after the settimeout was done and after resolve 
// was done we do prom1.then to run the function after function has been resolved
// main use case is after we wait for network request and once we get the network 
// we invoke the resolve function

// reject example


let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("random number made the request rejected")
    }
    else {
        setTimeout(() => {
            console.log('yes i am done');
            resolve("random number made the request resolved")
        }, 300);
    }
}
)


let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("random number made the request rejected")
    }
    else {
        setTimeout(() => {
            console.log('yes i am done');
            resolve("random number made the request resolved")
        }, 300);
    }
}
)



prom2.then((a) => {
    console.log(a)
}
).catch((err) => {
  console.log(err); 
}
)

// catch is used when site is under maintenance or backend is down
// so lets say network request is accepted then user gets to see site  
// if network request is rejected then user gets to see site is under maintenance


let prom3 = Promise.all([prom1, prom2])
prom3.then((a) => {
    console.log(a);
    
}).catch((err) => {
    console.log(err);
    
});