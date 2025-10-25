const router = require("express").Router()

const bookingCtrl = require("../controllers/bookingController")

router.get("/", bookingCtrl.GetBookings)
router.post("/", bookingCtrl.CreateBooking)
router.put("/:bookingId", bookingCtrl.UpdateBooking)
router.delete("/:placeId", bookingCtrl.DeleteBooking)

module.exports = router
