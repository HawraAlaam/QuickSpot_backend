const User = require("../models/User")

const GetUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.send(user)
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: "Error",
      msg: "An error has occurred while getting the user information!",
    })
  }
}

const UpdateProfile = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = `/uploads/${req.file.filename}`
    }
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.send(user)
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: "Error",
      msg: "An error has occurred while updating the user information!",
    })
  }
}

module.exports = {
  GetUser,
  UpdateProfile,
}
