const router = require("express").Router()

const userCtrl = require("../controllers/userController")

router.get("/profile/:id", userCtrl.GetUser)
router.put("/profile/:id", userCtrl.UpdateProfile)

module.exports = router
