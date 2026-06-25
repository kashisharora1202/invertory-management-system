const express = require("express")
const createuser_controller = require("../contoller/user_contoller")

const router = express.Router()


router.post("/user",createuser_controller)



module.exports=router