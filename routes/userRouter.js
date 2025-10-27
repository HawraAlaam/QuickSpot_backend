const router = require("express").Router()
const middleware = require("../middleware")
const userCtrl = require("../controllers/userController")
const upload = require('../middleware/upload')


router.get(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  userCtrl.GetUser
)
router.put(
  "/edit/:id",
  middleware.stripToken,
  middleware.verifyToken,
  userCtrl.UpdateProfile
)

module.exports = router
