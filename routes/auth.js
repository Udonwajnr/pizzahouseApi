const express = require("express")
const router = express.Router()
const {register,login,getAllUsers} = require("../controller/auth")
const {check } = require('express-validator')
const Users = require('../models/userModel')

router.route("/").get(getAllUsers)
router.route("/register").post(
    [
        check("username").notEmpty()
        .withMessage("Username cannot be empty")
        .trim()
        .isLength({min:6}).withMessage("Username must be up to 6 characters")
        ,
         check("password").notEmpty()
         .withMessage("Password cannot be empty")
         .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i")
         .withMessage("Please enter a password at least 8 character and contain At least one uppercase.At least one lower case.At least one special character. "),
         check("email").notEmpty()
        .withMessage("Email cannot be empty").isEmail().withMessage("Must be an email")
        .trim()
      ],register)
router.route("/login").post(login)

module.exports = router