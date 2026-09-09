const express = require("express")
const Razorpay = require("razorpay")

async function order(req,res) {
    try {
            const {product , image , price , category , coustmorname , phoneno , quantity , address , city , pincode , selerid } = req.body

            // razorpay instance 
            const razorpay = new Razorpay({
                key_id : process.env.RAZORPAY_API_KEY,
                key_secret : process.env.RAZORPAY_SECRET_KEY
            })
             
            const payorder = await razorpay.orders.create({
                    amount : price * 100,
                    currency : "INR",
                    receipt: `order_${Date.now()}`
            })
            
            return res.status(201).json({message:"payment order created",payorder})
            
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:"server not responce ", error:error.message})
    }
}

module.exports=order