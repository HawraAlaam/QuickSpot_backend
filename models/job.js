const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const jobSchema = new Schema(
  {
    title: { type: String, required: true },
    date: { type: String, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    salary: { type: Number, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true},
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
)
const Job = mongoose.model('Job', jobSchema)

module.exports = Job
