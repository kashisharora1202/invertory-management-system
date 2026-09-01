const express = require("express")
const userSchema = require("../schema/user_schema")
const productSchema = require("../schema/product_schema")

async function delete_account(req,res) {
    
    try {
        
         await productSchema.deleteMany({
            userid : req.user.id
        })
        
         await userSchema.findOneAndDelete({
            _id : req.user.id
        })
         

        res.status(200).json({message:"Acoount Deletion Successfully"})
    } catch (error) {
        res.status(500).json({message:"Account Deletion Failed "})
    }
}



module.exports=delete_account