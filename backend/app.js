require("dotenv").config()
const express = require("express")
const connect = require("./database/database_connection")
const createuser = require("./routes/user_create")
const cookieparser = require("cookie-parser")
const login = require("./routes/login") 
const addProduct = require("./routes/add_product")
const show_all_products = require("./routes/show_all_products")
const cors = require("cors")

const app = express()
connect()
app.use(express.json())
app.use(cookieparser())
app.use(cors())


app.use("/create", createuser)
app.use("/user",login)
app.use("/add",addProduct)
app.use("/show",show_all_products)

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`server is running port number ${PORT}`)
})