const mongoose = require("mongoose")

const userdata = mongoose.Schema({

    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneno:{
        type:String,
        required:true,
        minlength:[10,"Contact number can be only 10 digits"],
        maxlength:[10,"Contact number can be only 10 digits"],
        
    }
})

const userModel = mongoose.model("user",userdata)

module.exports=userModel