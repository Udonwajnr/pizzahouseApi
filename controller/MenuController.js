const asyncHandler = require("express-async-handler")
const Menu = require("../models/menuModel")

const getMenu =asyncHandler(async(req,res)=>{
    const menu = await Menu.find()
    return res.status(200).json(menu)
})

const createMenu = asyncHandler(async(req,res)=>{
    const menu = await Menu.create({
        name:req.body.name,
        price:req.body.price,
        description:req.body.description,
        image:req.body.image
    })

    return res.status(200).json(menu)
})

const updateMenu = asyncHandler(async(req,res)=>{
    const menu = await Menu.findById(req.params.id)
    if(!menu){
        throw new Error("Menu Not found")
    }

    const updateMenu = await Menu.findByIdAndUpdate(req.params.id,req.body,{new:true})
    return res.status(200).json(updateMenu)
})

const deleteMenu=asyncHandler(async(req,res)=>{
    const menu = await Menu.findById(req.params.id)
    if(!menu){
        throw new Error("Menu Not found")
    }
    await Menu.findByIdAndDelete(req.params.id)
    res.json(req.params.id)
})

module.exports = {getMenu,createMenu,updateMenu,deleteMenu}