const Booking = require("../models/Booking")

const GetBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({})
    res.send(bookings)
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: "Error",
      msg: "An error has occurred while getting the bookings!",
    })
  }
}

const CreateBooking = async (req, res) => {
  try {
    const booking = await Booking.create({ ...req.body })
    res.send(booking)
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: "Error",
      msg: "An error has occurred while creating a booking!",
    })
  }
}

const UpdateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.bookingId,
      req.body,
      {
        new: true,
      }
    )
    res.send(booking)
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: "Error",
      msg: "An error has occurred while updating the booking!",
    })
  }
}

const DeleteBooking = async (req, res) => {
  try {
    await Booking.deleteOne({ _id: req.params.bookingId })
    res.send({
      msg: "Booking Deleted",
      payload: req.params.bookingId,
      status: "Ok",
    })
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: "Error",
      msg: "An error has occurred while deleting the booking!",
    })
  }
}

module.exports = {
  GetBookings,
  CreateBooking,
  UpdateBooking,
  DeleteBooking,
}
