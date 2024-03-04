const mongoose = require("mongoose")

const ordersSchema = mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:[true,"Add a User"]
    },
    menu:[{
        productId:{
        type:mongoose.Types.ObjectId,
        ref:"Menu",
        required:[true,"Add a meal"]
        },
        quantity:{
            type:Number,
            required:true,
        },
    }],
    totalPrice:{
        type:Number,
        required:true
    },

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
    paymentId:{
        type:Number
    },
    paymentStatus:{
        type:Boolean,
        default:false,
        required:true
    }
})


module.exports = mongoose.model("Orders",ordersSchema)