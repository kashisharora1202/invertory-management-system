const express = require("express")
const orderSchema = require("../schema/order_schema")


async function showmyorders(req,res) {
    try {
        
        const data = await orderSchema.find({
            coustmorid:req.user.id
        })
         

        res.status(200).json({message:"your orders", products:data})
    } catch (error) {
        res.status(500).json({message:"server not response",error:error.message})
    }
}



module.exports = showmyorders