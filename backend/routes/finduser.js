const express = require("express")
const token_checker = require("../middleware/token_checker_middleware")
const finduser = require("../controller/finduser_controller")

const router = express.Router()

router.get("/user",token_checker,finduser)


module.exports = router