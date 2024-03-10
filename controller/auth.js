const jwt = require("jsonwebtoken")
const User = require("../models/userModel")
const asyncHandler= require("express-async-handler")
const bcrypt = require("bcryptjs")
const {validator,validationResult} = require("express-validator")

const getAllUsers =asyncHandler(async(req,res)=>{
    const user = await User.find()
    return res.status(200).json(user)
})
// register
const register =asyncHandler(async(req,res)=>{
    const error = validationResult(req)
    if(!error.isEmpty()){
      return res.status(400).json({error:error.array()})
    }
    const {username,email,password}= req.body
    const duplicateField =[]
    const duplicateUserName = await User.findOne({ username: req.body.username })
    const duplicateEmail = await User.findOne({ email: req.body.email })

   if(duplicateUserName){
    duplicateField.push("username")
    console.log("userName already exist")
   }

   if(duplicateEmail){
    duplicateField.push("email")
    console.log("email already exist")
   }
   if(duplicateField.length >0){
    return res.status(400).json({duplicateField})
   }

       const hashedPassword = await bcrypt.hash(password, 10);
       const user = new User({username,email,password:hashedPassword});
       await  user.save();
       res.status(200).json({message:"Registration Successful"})    
}
)
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
    res.json({token,user})
})

module.exports = {register,login,getAllUsers}