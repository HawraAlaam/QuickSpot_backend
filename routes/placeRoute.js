const router = require("express").Router()
const middleware = require("../middleware")
const placeCtrl = require("../controllers/placeController")

router.get("/", placeCtrl.GetPlaces)
router.get(
  "/:placeId",
  middleware.stripToken,
  middleware.verifyToken,
  placeCtrl.GetPlaceId
)
router.post(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  placeCtrl.CreatePlace
)
router.put(
  "/:placeId",
  middleware.stripToken,
  middleware.verifyToken,
  placeCtrl.UpdatePlace
)
router.delete(
  "/:placeId",
  middleware.stripToken,
  middleware.verifyToken,
  placeCtrl.DeletePlace
)

module.exports = router
