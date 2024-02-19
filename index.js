const express = require('express')
const dotenv  = require('dotenv').config()
const colors = require("colors")
const connectDB = require('./config/db')
const app = express()
const port  = process.env.PORT||3000
const cookieParser = require('cookie-parser')
let cors = require("cors")

app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/user",require('./routes/auth'))
app.use("/api/category",require("./routes/categoryRoutes"))
app.use("/api/menu",require('./routes/menuRoute'))
app.use('/api/user', require('./routes/userRoute'));


app.get('/',(req,res)=>{
    res.send('Welcome to my Api')
})


app.listen(port, ()=>{
    console.log(`This Api is about to Rock Hard`)
})


connectDB()