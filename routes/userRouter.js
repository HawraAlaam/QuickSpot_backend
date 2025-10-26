const router = require("express").Router()

const userCtrl = require("../controllers/userController")

router.get("/:id", userCtrl.GetUser)
router.put("/:id", userCtrl.UpdateProfile)

module.exports = router
