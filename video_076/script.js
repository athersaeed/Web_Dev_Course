function getData() {
    // will bring data from server
    // but we dont know when the data will be available
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3300);
    }
    )
}

console.log('Loading Modules'); // code for loading modules

console.log('Do something else');

console.log('Load Data')

// we only want to process data when data is loaded
// so we need to wait 

// after running the below lines, we wait for the promise until its done
// while we wait for the promise, the lines below the promise can keep running
let data = getData()

console.log(data);
console.log('Process Data');

// we can also put this in a callback way where we wait for the promise 
// and then run the code inside the callback

// data.then((v) => {
//     console.log(data);
//     console.log("Process Data");
// }
// )


console.log('task 2');

