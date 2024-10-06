const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const bookRoute = require('./routes/bookRoutes')


const mongo_url = process.env.MONGO_CONN;
mongoose.connect(mongo_url)
    .then(()=>{
        console.log("Mongo connected")
    }).catch((e)=>{
        console.log("error",e)
    })


const app =express()
app.use(express.json())
app.use('/book',bookRoute)

app.get('/', (req,res)=>{
    res.send("pong")
})

app.listen(8080,()=>{
    console.log("server running")
})