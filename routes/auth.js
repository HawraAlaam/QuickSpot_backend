const router = require("express").Router()
const controller = require("../controllers/auth")
const middleware = require("../middleware")


router.post("/register", controller.Register)
router.post("/login", controller.Login)
router.post('/:userId/profile', upload.single("picture"),controller.userPicture)
router.put(
  "/update/:id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePassword
)

router.get(
  "/session",
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)

module.exports = router
