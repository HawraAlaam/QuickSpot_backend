const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({
  place: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
})

const Booking = mongoose.model("Booking", bookingSchema)
module.exports = Booking
