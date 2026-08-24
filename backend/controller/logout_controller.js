const express = require("express")
const jwt = require("jsonwebtoken")

async function logout(req,res) {
    try {
        
        res.clearCookie("token")
        
        res.status(201).json({message:"logout successfully"})
    } catch (error) {
        res.status(500).json({message:"Something Wents Wrong" , error:error.message})
    }
}

module.exports=logout 