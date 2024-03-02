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
        required:[true,"Add a meal"]},
        quantity:{
            type:Number,
            required:true,
        },
    }],
    totalPrice:Number
})


module.exports = mongoose.model("Orders",ordersSchema)