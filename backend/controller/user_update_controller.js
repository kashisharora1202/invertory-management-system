const express = require("express")
const bcrypt = require("bcrypt")
const userSchema = require("../schema/user_schema")

async function update(req,res) {
        try {
            const updatedata = req.body

            if(updatedata.password){
                console.log("yes")
                const hashpassword = await bcrypt.hash(updatedata.password,10)
                updatedata.password=hashpassword
            }
                     
                 await userSchema.findOneAndUpdate(
                {_id:req.user.id},
                updatedata, 
                {
                    new:true
                }
            )

            res.status(201).json({message:"Update successfully"})
        } catch (error) {
            console.log(error.message)
            res.status(500).json({message:"updation Failed",error:error.message})
        }    
}




module.exports=update