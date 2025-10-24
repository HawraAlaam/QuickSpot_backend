const router = require("express").Router()
const controller = require("../controllers/auth")
const middleware = require("../middleware")

router.post("/register", controller.Register)

module.exports = router
