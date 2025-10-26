const router = require("express").Router()
const middleware = require("../middleware")
const controller = require("../controllers/jobController")

router.get("/", controller.GetJobs)

router.get(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetJobById
)

router.post(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateJob
)

router.put(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateJob
)

router.delete(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteJob
)

module.exports = router
