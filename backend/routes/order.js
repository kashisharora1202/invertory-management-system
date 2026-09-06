const express = require("express")
const token_checker = require("../middleware/token_checker_middleware")
const order = require("../controller/order_controller")

const router = express.Router()

router.post("/order",token_checker,order)

module.exports = router