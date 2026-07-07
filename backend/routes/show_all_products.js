const express = require("express")
const token_checker = require("../middleware/token_checker_middleware")
const showAllProducts = require("../controller/show_all_products_controller")

const router = express.Router()

router.get("/allproducts", token_checker , showAllProducts)

module.exports=router