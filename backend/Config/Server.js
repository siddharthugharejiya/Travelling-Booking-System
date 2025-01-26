const mongoose = require("mongoose")


const Server = async() =>{
   await mongoose.connect("mongodb+srv://multiera95:95@travelling.fcgxb.mongodb.net/?retryWrites=true&w=majority&appName=Travelling")
   console.log("backend is running");
   

}

module.exports = Server