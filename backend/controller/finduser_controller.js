const express = require("express")
const userSchema = require("../schema/user_schema")

async function finduser(req,res) {
    
    try {
        const user = await userSchema.findOne({
            _id : req.user.id
        })

        return res.status(201).json({user:user})
        
    } catch (error) {
       return res.status(404).json({message:"user not found",error:error.message})
    }
}

module.exports = finduser