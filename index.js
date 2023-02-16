// import express
const express = require('express')
// import cors 
const cors = require('cors');
// import dataService
const dataService = require('./services/dataService');
const { Products } = require('./services/db');
// create an application using express
const app = express();
// use server parser for the server response
app.use(express.json())
// using cors specify the origin to the server 
app.use(cors({
    origin:['http://localhost:4200', 'http://localhost:63145']
}))


// setup a port number
app.listen(3000,()=>{
    console.log('listening on the port:3000');
})
// API call to get all products
app.get('/all-products', (req, res) => {
    dataService.getProducts().then(
        result => {
            res.status(result.statusCode).json(result)
        }
    )
})

app.get('/getwishlist', (req, res) => {
    // dataService.getwishlist(req.body.id).then(
    dataService.getwishlist().then(
        result => {
            res.status(result.statusCode).json(result)
        }
    )
})

app.post('/addtowishlist', (req, res) => {
    dataService.addtowishlist(req.body.id, req.body.title, req.body.price, req.body.image, req.body.description).then(result => {
            res.status(result.statusCode).json(result)
        }
    )
})

app.delete('/deletewish/:id', (req, res) => {
    // dataService.getwishlist(req.body.id).then(
    dataService.deletewish(req.params.id).then(
        result => {
            res.status(result.statusCode).json(result)
        }
    )
})