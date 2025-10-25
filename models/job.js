const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const jobSchema = new Schema(
  {
    title: { type: String, required: true },
    time: { type: String },
    date: { type: String },
    price: { type: Number },
    location: { type: String },
    description: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
)
const Job = mongoose.model('Job', jobSchema)

module.exports = Job
