const BookingModel = require("../Model/Booking")
const FlightsModel = require("../Model/Flights")

const Booking = async(req,res) =>{
   try {
       const data = await BookingModel.create(req.body)
      return res.status(200).json({data})

   } catch (error) {
      return res.status(400).json(error.message)
   }

}


const Flight = async(req,res) =>{
    try {
        const data = await FlightsModel.create(req.body)
       return res.status(200).json({data})
 
    } catch (error) {
       return res.status(400).json(error.message)
    }
 
 }

module.exports ={ Booking ,Flight}