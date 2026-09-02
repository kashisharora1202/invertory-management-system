const express = require("express")
const userSchema = require("../schema/user_schema")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

async function login(req,res) {
    try {
        const {username,password,email} = req.body

        const user = await userSchema.findOne({
            $or:[
                {username},
                {email}
            ]
         })

         if(!user){
           return res.status(400).json({message:"user not found"})
         }

         if(!password){
            return   res.status(400).json({message:"Enter your password"}) 
         }

         const ismatch = await bcrypt.compare(password,user.password)

         if(!ismatch){
            return res.status(400).json({message:"incorrect password"})
         }
        
         const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

         res.cookie("token",token ,{
            httpOnly: true,
            secure: true,
            sameSite: "none"
         })

         return res.status(200).json({message:"login successfully",user:user})

    } catch (error) {
       return res.status(500).json({message:"login failed",error:error.message})
    }
}

module.exports=login