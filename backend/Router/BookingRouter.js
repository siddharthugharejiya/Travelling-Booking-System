const { Router} = require('express')
const {Booking, Flight} = require('../Controller/Bookings')

const BookingRouter = Router()

BookingRouter.post("/booking",Booking)
BookingRouter.post("/flight",Flight)

module.exports = BookingRouter