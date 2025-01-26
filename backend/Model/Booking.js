

const mongoose = require('mongoose')

const BookingSchema = mongoose.Schema({
    hotelImageUrl:{type : String},
    hotelName: {type : String},
    location: {type : String},
    pricePerNight:{type : String},
    rating: {type : String},
    availability: {type : Boolean}
  
})

const BookingModel = mongoose.model("Booking",BookingSchema)

module.exports = BookingModel