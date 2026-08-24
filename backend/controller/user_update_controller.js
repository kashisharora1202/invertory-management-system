const express = require("express")
const userSchema = require("../schema/user_schema")

async function update(params) {
        try {
            const user = await userSchema.findOneAndUpdate()
        } catch (error) {
            res.status(500).json({message:"updation Failed",error:error.json})
        }    
}




module.exports=update