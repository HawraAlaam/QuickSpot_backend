const router = require("express").Router()
const middleware = require("../middleware")
const userCtrl = require("../controllers/userController")

router.get(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  userCtrl.GetUser
)
router.put(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  userCtrl.UpdateProfile
)

module.exports = router
