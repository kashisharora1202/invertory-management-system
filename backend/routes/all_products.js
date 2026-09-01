const express = require("express")
const router = express.Router()
const token_checker = require("../middleware/token_checker_middleware")
const allproducts = require("../controller/all_products_controller")

router.get("/products", token_checker , allproducts)

module.exports=router