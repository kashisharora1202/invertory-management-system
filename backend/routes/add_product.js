const express = require("express")
const token_checker = require("../middleware/token_checker_middleware")
const addProduct = require("../controller/add_product_controller")
const router = express.Router()
const multer = require("multer")


const storage = multer.memoryStorage()
const upload = multer({
    storage:storage
})

router.post("/product",token_checker,upload.single("image"),addProduct)




module.exports=router