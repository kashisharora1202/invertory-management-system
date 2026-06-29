const express = require("express")
const user_schema = require("../schema/user_schema")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

async function createuser_controller(req,res){
    try {
        
        const {username,password,email}=req.body

        const hashpassword = await bcrypt.hash(password, 10)

        const user = await user_schema.create({
            username:username,
            password: hashpassword,
            email:email
        })

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
        res.cookie("token",token)

        res.status(200).json({message:"user created successfully ", user:user})

    } catch (error) {
        console.log(error)
        res.status(500).json({message:"user created failed"})
    }
}


module.exports=createuser_controller