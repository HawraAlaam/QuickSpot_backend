const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true },
    image: { type: String, required: false },
    bio: { type: String, required: false },
    mobileNumber: { type: String, required: true },
  },
  { timestamps: true }
)

const User = mongoose.model("User", userSchema)

module.exports = User
