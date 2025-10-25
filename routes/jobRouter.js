const router = require("express").Router()

const controller = require("../controllers/jobController")

router.get("/", controller.GetJobs)

router.get("/:id", controller.GetJobById)

router.post("/", controller.CreateJob)

router.put("/:id", controller.UpdateJob)

router.delete("/:id", controller.DeleteJob)

module.exports = router
