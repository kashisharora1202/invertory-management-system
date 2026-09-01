const express = require("express")
const product_Schema = require("../schema/product_schema")

async function allproducts(req,res) {
    try {
        
        const products = await product_Schema.find()
        
        res.status(200).json({message:"its working",products})

    } catch (error) {
        res.status(500).json({message:"somethings Wents Wrong",error:error.message})
    }
}


module.exports=allproducts