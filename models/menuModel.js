const mongoose = require("mongoose")

const menuSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:[true,"Please add a number"]
    },
    description:{
        type:String,
        required:[true,"Please add text"]
    },
    image:{
        type:String,
        required:[true,"Please add image"]
    }    
})


module.exports = mongoose.model("Menu",menuSchema)