require("dotenv").config()
const express = require("express")
const connect = require("./database/database_connection")
const createuser = require("./routes/user_create")
const cookieparser = require("cookie-parser")
const login = require("./routes/login") 
const addProduct = require("./routes/add_product")
const show_all_products = require("./routes/show_all_products")
const finduser = require("./routes/finduser")
const cors = require("cors")
const logout = require("./routes/logout")

const app = express()
connect()
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))
app.use(express.json())
app.use(cookieparser())


app.use("/create", createuser)
app.use("/user",login)
app.use("/add",addProduct)
app.use("/show",show_all_products)
app.use("/find",finduser)
app.use("/user",logout)

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`server is running port number ${PORT}`)
})