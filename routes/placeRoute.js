const router = require("express").Router()
const middleware = require("../middleware")
const placeCtrl = require("../controllers/placeController")
const upload = require("../middleware/upload")


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
  upload.array("images", 6),
  placeCtrl.CreatePlace
)
router.put(
  "/:placeId",
  middleware.stripToken,
  middleware.verifyToken,
   upload.array("images", 6),
  placeCtrl.UpdatePlace
)
router.delete(
  "/:placeId",
  middleware.stripToken,
  middleware.verifyToken,
  placeCtrl.DeletePlace
)

module.exports = router
