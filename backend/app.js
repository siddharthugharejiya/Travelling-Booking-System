const express = require('express')
const UserRouter = require('./Router/UserRouter')
const Server = require('./Config/Server')
const BookingRouter = require('./Router/BookingRouter')
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/",UserRouter)
app.use("/",BookingRouter)

app.listen(9595,()=>{
    console.log("server is running on port")
    Server()
    
})