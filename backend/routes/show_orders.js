const express = require("express")
const router = express.Router()
const token_checker = require("../middleware/token_checker_middleware")
const showmyorders = require("../controller/show_my_order_controller")
const showcoustmororders = require("../controller/show_coustmor_orders_controller")

router.get("/myorders",token_checker , showmyorders)  //mene order kiye hai 
router.get("/coustmororders",token_checker , showcoustmororders)  // muje order mile hai coustmor se


module.exports = router