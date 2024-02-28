const asyncHandler = require("express-async-handler")
const Orders = require('../models/ordersModel')

const getAllOrders = asyncHandler(async(req,res)=>{
    const orders = await Orders.find().populate("user").populate("menu")
    return res.status(200).json(orders)
})

const createOrders = asyncHandler(async(req,res)=>{
    const order = await Orders.create({
        user:req.body.user,
        menu:req.body.menu,
        quantity:req.body.quantity,
        status:req.body.status
    })
    return res.status(200).json(order)
})

const updateOrders = asyncHandler(async(req,res)=>{
    const orders = await Orders.findById(req.params.id)
    if(!orders){
        throw new Error("Order Not found")
    }
    const updatedOrder = await Orders.findByIdAndUpdate(req.params.id,req.body,{new:true})
    return res.status(200).json(updatedOrder)
})

const deleteOrders=asyncHandler(async(req,res)=>{
    const order = await Orders.findById(req.params.id)
    if(!order){
        throw new Error("Menu Not found")
    }
    await Orders.findByIdAndDelete(req.params.id)
    res.json(req.params.id)
})

module.exports={getAllOrders,createOrders,updateOrders,deleteOrders}