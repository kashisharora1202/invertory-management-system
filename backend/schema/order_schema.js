const mongoose = require("mongoose")

const orderdata = mongoose.Schema({
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
        required:true,
        min:[1]
    },
    category:{
        type:String,
        required:true
    },
    coustmorname:{
        type:String,
        required:true
    },
    phoneno:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },

    selerid:{
        type:String,
        required:true
    },
    coustmorid:{
        type:String,
        required:true
    }
})

const orderModel = mongoose.model("order",orderdata)

module.exports=orderModel