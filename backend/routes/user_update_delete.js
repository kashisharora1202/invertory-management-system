const express = require("express")
const token_checker = require("../middleware/token_checker_middleware")
const update = require("../controller/user_update_controller")


const router = express.Router()

router.patch("/update",token_checker,update)

module.exports=router