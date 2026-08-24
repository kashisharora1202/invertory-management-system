const express = require("express")
const token_checker = require("../middleware/token_checker_middleware")
const logout = require("../controller/logout_controller")

const router = express.Router()


router.get("/logout", token_checker , logout)

module.exports=router