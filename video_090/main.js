const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

// app.use(express.static('public'))

// route for blogs
const blog = require('./routes/blog')
app.use('/blog', blog)

// Middleware 1
app.use((req, res, next)=>{
    const timestamp = Date.now()
    const date = new Date(timestamp)
    console.log(req.headers)
    req.ather = 'attu'
    fs.appendFileSync('logs.txt',`${date.toLocaleString()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    next()
})

// Middleware 2
app.use((req, res, next)=>{
    console.log('m2')
    next()
})

app.get('/', (req, res)=>{
    res.send('Hello World' + req.ather)
})

app.get('/about', (req, res)=>{
    res.send('Hello World about' + req.ather)
})

app.get('/contact', (req, res)=>{
    res.send('Hello World contact' + req.ather)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
