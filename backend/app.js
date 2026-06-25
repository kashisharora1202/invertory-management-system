require("dotenv").config()
const express = require("express")
const connect = require("./database/database_connection")
const createuser = require("./routes/user_create")
const cookieparser = require("cookie-parser")

const app = express()
connect()
app.use(express.json())
app.use(cookieparser())


app.use("/create", createuser)

app.listen(4000,()=>{
    console.log("server is running port number 4000")
})