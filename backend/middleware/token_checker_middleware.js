const express = require("express")
const jwt = require("jsonwebtoken")

async function token_checker(req,res,next){
    try {
        
        const token = req.cookies.token
        console.log(token)
        
        if(!token){
            return res.status(401).json({message:"please login first"})
        }
        
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            
            req.user = decoded
            
            next()
        } catch (error) {
            return res.status(403).json({message:"unauthorized access",error:error.message})
        }
    } catch (error) {
        return res.status(500).json({message:"error",error:error.message})
    }
}

module.exports=token_checker