const mongoose = require("mongoose")
const categorySchema = require("./categoryModel")

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
    }    ,
    category:{
        type:mongoose.Types.ObjectId,
        ref:"Category",
        required:[true,"Add a category"]
    }
})


module.exports = mongoose.model("Menu",menuSchema)