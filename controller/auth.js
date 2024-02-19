const jwt = require("jsonwebtoken")
const User = require("../models/userModel")
const asyncHandler= require("express-async-handler")
const bcrypt = require("bcryptjs")


// register
const register =asyncHandler(async(req,res)=>{
    const {username,email,password}= req.body
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({username,email,password:hashedPassword});
    await  user.save();
    res.json({message:"Registration Successful"})
})

// Login with existing user
const login = asyncHandler(async(req,res,next)=>{
    const {username,password} = req.body;
    const user = await User.findOne({username});
    if(!user){
        return res.status(404).json({message:"User Not Found"})
    }

    const passwordMatch = await bcrypt.compare(password,user.password);
    if(!passwordMatch){
        return res.status(401).json({message:"Incorrect password"});
    }
    const token = jwt.sign({userId:user._id},process.env.SECRET_KEY,{
        expiresIn:"1 hour"
    });
    res.json({token})
})

module.exports = {register,login}