const express = require('express')
const dotenv  = require('dotenv').config()
const colors = require("colors")
const connectDB = require('./config/db')
const app = express()
const port  = process.env.PORT||3000


app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/category",require("./routes/categoryRoutes"))

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(port, ()=>{
    console.log(`This Api is about to Rock Hard`)
})


connectDB()