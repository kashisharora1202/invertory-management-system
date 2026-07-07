const express = require("express")
const productSchema = require("../schema/product_schema")

async function showAllProducts(req,res){
    
    try {
        
        const products = await productSchema.find({
            userid:req.user.id
        })
        
        res.status(201).json({message:"Retrieve all products here",products})

    } catch (error) {
        res.status(500).json({message:"this user does not found products "})
    }
}

module.exports=showAllProducts