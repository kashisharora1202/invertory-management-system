const express = require("express")
const token_checker = require("../middleware/token_checker_middleware")
const order = require("../controller/order_controller")
const orderverification = require("../controller/order_verification_controller")

const router = express.Router()

router.post("/order",token_checker,order)
router.post("/orderverification",token_checker,orderverification)

module.exports = router