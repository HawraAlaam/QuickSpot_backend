const router = require("express").Router()

const placeCtrl = require("../controllers/placeController")

router.get("/", placeCtrl.GetPlaces)
router.get("/:placeId", placeCtrl.GetPlaceId)
router.post("/", placeCtrl.CreatePlace)
router.put("/:placeId", placeCtrl.UpdatePlace)
router.delete("/:placeId", placeCtrl.DeletePlace)

module.exports = router
