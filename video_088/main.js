const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static('video_088/public'))

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (request, response) => {
    response.send('Hello World!')
})

app.get('/about', (request, response) => {
    response.send('Hello About!')
})

app.get('/contact', (request, response) => {
    response.send('Hello Contact!')
})

app.get('/blog/', (request, response) => {
    response.send('Hello Blog!')
})

app.get('/blog/:slug', (request, response) => {
    // for url: http://localhost:3000/blog/ather?mode=blue&purple=violet
    console.log(request.params) // output: [Object: null prototype] { slug: 'ather' }
    console.log(request.query)  // output: [Object: null prototype] { mode: 'blue', purple: 'violet' }
    console.log("hey")
    response.send(`Hello intro-to-${request.params.slug}!`)
})


// app.get('/blog/intro-to-js', (request, response) => {
//      logic to fetch intro to js from the db
//     response.send('Hello JS Blog!')
// })

// app.get('/blog/intro-to-python', (request, response) => {
    //      logic to fetch intro to python from the db
//     response.send('Hello Python Blog!')
// })




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
