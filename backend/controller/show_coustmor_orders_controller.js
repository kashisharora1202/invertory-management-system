const express = require("express")
const orderSchema = require("../schema/order_schema")
const product = require("./add_product_controller")

async function coustmororders(req,res) {
    try {
        const data = await orderSchema.find({
            selerid:req.user.id
        })
        res.status(200).json({message:"your customer orders",product:data})
    } catch (error) {
        res.status(500).json({message:"server not response",error:error.message})
    }
}

module.exports= coustmororders