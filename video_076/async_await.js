// promise settle means resolve or reject

// resolve means promise has settled successfully
// reject means promise has not settled successfully


// async function will run in the background
// async function getData() {
//     // simulating getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     }
//     )
async function getData() {
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    let data = await x.json()
    console.log(data);
    return 455
}


// EXPLAINATION
// we have an async function main (await can only be used in async function)

async function main() {

    console.log('Loading Modules'); // code for loading modules

    console.log('Do something else');

    console.log('Load Data')

    // if we dont use await it will return as a promise rather than the result of the data
    // this happens because we are not waiting for the data to load
    let data = await getData()
    // if we didnt write await, then it will go in the background and run 
    // the next few next lines

    console.log(data);

    console.log('Process Data');

    console.log('task 2');

}

main()

// so basically instead of using .then to wait for the code to compile and then run next lines,
// we can use async awaits


