const mongoose = require("mongoose")

const productdata = mongoose.Schema({

    product:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        min:[1]
    },
    catagory:{
        type:String,   
    },
    stock:{
        type:String,
        default:0
    }
})

const productModel = mongoose.model("product",productdata)

module.exports=productModel