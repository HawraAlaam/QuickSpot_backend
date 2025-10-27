const router = require("express").Router()
const middleware = require("../middleware")
const placeCtrl = require("../controllers/placeController")
const upload = require('../middleware/upload')



router.post('/:placeId/images', upload.array("images", 6),placeCtrl.placePictures)
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
