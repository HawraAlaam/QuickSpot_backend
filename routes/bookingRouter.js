const router = require("express").Router()

const bookingCtrl = require("../controllers/bookingController")

router.get("/", bookingCtrl.GetBookings)
router.post("/", bookingCtrl.CreateBooking)
router.put("/:bookingId", bookingCtrl.UpdateBooking)
router.delete("/:bookingId", bookingCtrl.DeleteBooking)

module.exports = router
