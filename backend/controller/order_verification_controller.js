const express = require("express");
const crypto = require("crypto"); //inbuild function in node js
const productSchema = require("../schema/product_schema");
const orderSchema = require("../schema/order_schema");

async function orderverification(req, res) {
  try {
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
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
      selerid,
    } = req.body;

    const generate_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET_KEY) //sha256 ek hashing algo hai jo secret key ke help value se hash kr rha hai
      .update(razorpay_order_id + "|" + razorpay_payment_id) //isse ek string bne jayegi or usko hmac ke sath use kiya jayega
      .digest("hex"); //hmac ke result ko hexadecimal string me convert krta hai

   
    if (generate_signature !== razorpay_signature) {
      return res.status(400).json({ message: "payment verification failed" });
    }

    //verification complete

    const productowner = await productSchema.findOne({
      //order create
      $and: [{ userid: req.body.selerid }, { product: req.body.product }],
    });
    console.log(productowner);
    if (productowner.stock == 0) {
      return res.status(201).json({ message: "out of stock" });
    }

    if (quantity > productowner.stock) {
      return res
        .status(201)
        .json({ message: "We have less stock of this product" });
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
      selerid,
      coustmorid: req.user.id,
    });

    const updatestock = productowner.stock - quantity;
    console.log(updatestock);

    const updated = await productSchema.findOneAndUpdate(
      {
        $and: [{ userid: selerid }, { product: req.body.product }],
      },
      { $set: { stock: updatestock } },
      {
        new: true,
      },
    );

    res
      .status(201)
      .json({
        message: "congratulations your order has beed placed",
        order: orders,
        updated: updated,
      });
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: "server not response", error: error.message });
  }
}

module.exports = orderverification;
