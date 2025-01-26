const mongoose = require('mongoose')

const userschema = mongoose.Schema({
    username : {type : String},
    email : {type : String},
    password : {type : String},
    role : {type : String, enum: ['admin', 'user'],  default:"user"},
    secretkey : {type : String} 

})

const UserModel = mongoose.model("User",userschema)
module.exports = UserModel