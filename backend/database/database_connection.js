const mongoose = require("mongoose")

const connect = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    console.log("database connected successfully")
}

module.exports=connect