const express = require("express")
const token_checker = require("../middleware/token_checker_middleware")
const addProduct = require("../controller/add_product_controller")
const router = express.Router()


router.post("/product",token_checker,addProduct)




module.exports=router