const router = require("express").Router()
const middleware = require("../middleware")
const bookingCtrl = require("../controllers/bookingController")

router.get(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  bookingCtrl.GetBookings
)

router.get(
  "/:bookingId",
  middleware.stripToken,
  middleware.verifyToken,
  bookingCtrl.GetBookingById
)
router.post(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  bookingCtrl.CreateBooking
)
router.put(
  "/:bookingId",
  middleware.stripToken,
  middleware.verifyToken,
  bookingCtrl.UpdateBooking
)
router.delete(
  "/:bookingId",
  middleware.stripToken,
  middleware.verifyToken,
  bookingCtrl.DeleteBooking
)

module.exports = router
