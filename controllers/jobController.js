const Job = require("../models/Job")

const GetJobs = async (req, res) => {
  try {
    const jobs = await Job.find({})
    res.status(200).send(jobs)
  } catch (error) {
    console.error("Error fetching jobs:", error)
    res.status(500).send("Error fetching jobs")
  }
}

const GetJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate("owner")

    if (!job) {
      return res.status(404).send("Job not found")
    }

    res.status(200).send(job)
  } catch (error) {
    console.error("Error fetching job by ID:", error)

    res.status(500).send("Error fetching job")
  }
}

const CreateJob = async (req, res) => {
  try {
    const newJob = await Job.create({ ...req.body })
    res.status(201).send(newJob)
  } catch (error) {
    console.error("Error creating job:", error)

    res.status(500).send("Error creating job")
  }
}

const UpdateJob = async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })

    if (!updatedJob) {
      return res.status(404).send("Job not found for update")
    }

    res.status(200).send(updatedJob)
  } catch (error) {
    console.error("Error updating job:", error)
    res.status(500).send("Error updating job")
  }
}

const DeleteJob = async (req, res) => {
  try {
    const result = await Job.deleteOne({ _id: req.params.id })

    if (result.deletedCount === 0) {
      return res.status(404).send("Job not found for deletion")
    }

    res.status(200).send({
      msg: "Job Deleted Successfully",
      id: req.params.id,
    })
  } catch (error) {
    console.error("Error deleting job:", error)
    res.status(500).send("Error deleting job")
  }
}

module.exports = {
  GetJobs,
  GetJobById,
  CreateJob,
  UpdateJob,
  DeleteJob,
}
