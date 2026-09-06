const express = require("express")
const orderSchema = require("../schema/order_schema")

async function order(req,res) {
    try {
            const {product , image , price , category , coustmorname , phoneno , quantity , address , city , pincode , selerid } = req.body


            const orders = await orderSchema.create({
              product,
              image,
              price,
              category,
              coustmorname,
              phoneno,
              quantity,
              address,
              city,
              pincode,
              selerid ,
              coustmorid : req.user.id
            })

            res.status(201).json({message:"congratulations your order has beed placed" , order:orders})


    } catch (error) {
        res.status(500).json({message:"server not responce ", error:error.message})
        console.log(error.message)
    }
}

module.exports=order