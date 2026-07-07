const mongoose = require("mongoose")

const productdata = mongoose.Schema({

    product:{
        type:String,
        required:true
    },
    image:{
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
        type:Number,
        default:0
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

const productModel = mongoose.model("product",productdata)

module.exports=productModel