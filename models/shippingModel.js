const mongoose = require("mongoose")
const userSchema =  require('./userModel')

const shippingSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        unique:true
    },
    lastName:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true,
    }
    ,
    city:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:[true,"Add a User"]
    }
})

module.exports = mongoose.model("Shipping",shippingSchema)