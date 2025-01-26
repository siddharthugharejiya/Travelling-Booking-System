const mongoose = require('mongoose')

const FlightsSchema = mongoose.Schema({
    flightName:{type : String},
    flightImageUrl:{type : String},
    departure:{type : String},
    destination:{type : String},
    price:{type : String},
    availability:{type : Boolean},

})

const FlightsModel = mongoose.model("Flight",FlightsSchema)
module.exports = FlightsModel