const express = require('express')

const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
    console.log("Hey! Its a get request")
    res.send('Hello World get!')
})

app.post('/', (req, res) => {
    console.log("Hey! Its a post request")
    res.send('Hello World post!')
})

app.put('/', (req, res) => {
    console.log("Hey! Its a PUT request")
    res.send('Hello World PUT!')
})

app.get('/index', (req, res) => {
    console.log("Hey! Its a index")
    res.sendFile('templates/index.html', {root: __dirname})
})

app.get('/api', (req, res) => {
    console.log("Hey! Its a index")
    res.json({a:1, b:2, c: 3, name: ["ather", "saeed"]})
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
