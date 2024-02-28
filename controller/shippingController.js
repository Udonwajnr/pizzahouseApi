const asyncHandler = require("express-async-handler")
const Shipping = require("../models/shippingModel")

const getShipping =asyncHandler(async(req,res)=>{
    const shipping = await Shipping.find().populate("user")
    return res.status(200).json(shipping)
})

const createShipping = asyncHandler(async(req,res)=>{
    const shipping = await Shipping.create({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        address:req.body.address,
        city:req.body.city,
        phoneNumber:req.body.phoneNumber,
        user:req.body.user,
    })
    return res.status(200).json(shipping)
})

const updateShipping =asyncHandler(async(req,res)=>{
    const shipping = await Shipping.findById(req.params.id)
    if(!shipping){
        throw new Error("Menu Not found")
    }

    const updatedShipping = await Shipping.findByIdAndUpdate(req.params.id,req.body,{new:true})
    return res.status(200).json(updatedShipping)
})

const deleteShipping=asyncHandler(async(req,res)=>{
    const shipping = await Shipping.findById(req.params.id)
    if(!shipping){
        throw new Error("Menu Not found")
    }
    await Shipping.findByIdAndDelete(req.params.id)
    res.json(req.params.id)
})

module.exports = {getShipping,createShipping,updateShipping,deleteShipping}