const asyncHandler = require("express-async-handler")
const Orders = require('../models/ordersModel')

const getAllOrders = asyncHandler(async(req,res)=>{
    const orders = await Orders.find().populate("user").populate("menu.productId")
    return res.status(200).json(orders)
})

const createOrders = asyncHandler(async(req,res)=>{
    const {user,menu,totalPrice} = req.body

    const meal = menu.map(item => ({
    productId: item._id,
    quantity: item.quantity || 1, // Assuming a default quantity of 1 if not provided
    }));

    const order = await Orders.create({
        user,meal,totalPrice
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
        throw new Error("Order Not found")
    }
    await Orders.findByIdAndDelete(req.params.id)
    res.json(req.params.id)
})

module.exports={getAllOrders,createOrders,updateOrders,deleteOrders}