const mongoose = require('mongoose')

const userschema = mongoose.Schema({
    username : {type : String},
    email : {type : String},
    password : {type : Number}

})

const UserModel = mongoose.model("User",userschema)
module.exports = UserModel