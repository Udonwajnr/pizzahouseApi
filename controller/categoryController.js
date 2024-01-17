const asyncHandler = require("express-async-handler")
const Category = require('../models/categoryModel')

const getCategory = asyncHandler(async(req,res)=>{
    const category = await Category.find()
    return res.status(200).json(category)
})

const createCategory=asyncHandler(async(req,res)=>{
    if(!req.body.name){
        res.status(400)
        throw new Error ("please add a text field")
    }
    const category = await Category.create({
        name:req.body.name
    })

    return res.status(200).json({category})
})

const updateCategory = asyncHandler(async(req,res)=>{
    const category = await Category.findById(req.params.id)
    if(!category){
        throw new Error("Category not found")
    }

    const updatedCategory = await Category.findByIdAndUpdate(req.params.id,req.body,{new:true})

    res.status(200).json(updatedCategory)
})


const deleteCategory = asyncHandler(async(req,res)=>{
    const category = await Category.findById(req.params.id)
    if(!category){
        throw new Error("category Not Found")
    }

    await Category.findByIdAndDelete(req.params.id)
    res.json(req.params.id)
})

module.exports = {getCategory,createCategory,updateCategory,deleteCategory}