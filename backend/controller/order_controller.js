const express = require("express")
const orderSchema = require("../schema/order_schema")
const productSchema = require("../schema/product_schema")

async function order(req,res) {
    try {
            const {product , image , price , category , coustmorname , phoneno , quantity , address , city , pincode , selerid } = req.body

            const productowner = await productSchema.findOne({
                $and:[
                   {userid : selerid},
                    {product:req.body.product}
                
                ] 
            })
            if(productowner.stock==0){
                return res.status(201).json({message:"out of stock"})
            }

            if(quantity>productowner.stock ){
                return res.status(201).json({message:"We have less stock of this product"})
            }

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

                
            const updatestock = productowner.stock - quantity 
            console.log(updatestock)
            
            const updated = await productSchema.findOneAndUpdate({
                $and:[
                    {userid : selerid},
                    {product : req.body.product}
                ]},
                {$set:{stock : updatestock}},
                {
                    new:true
                }
                
            )

            res.status(201).json({message:"congratulations your order has beed placed" , order:orders , updated:updated})

    } catch (error) {
        res.status(500).json({message:"server not responce ", error:error.message})
        console.log(error.message)
    }
}

module.exports=order