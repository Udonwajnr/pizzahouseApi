const mongoose = require("mongoose")
const userSchema =  require('./userModel')
const menuSchema = require('./menuModel')

const shippingSchema = mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:[true,"Add a User"]
    },
    menu:{
        type:mongoose.Types.ObjectId,
        ref:"Menu",
        required:[true,"Add a meal"]
    },
    quantity:{
        type:Number,
        required:true,
    },
    status:{
        type:Boolean,
        required:true,
        default:true
    }
})


module.exports = mongoose.model("Orders",shippingSchema)