const express = require('express')
const morgan = require('morgan')
const cors = require('cors')



const PORT = process.env.PORT || 3000

const db = require('./db')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const jobRouter = require ("./routes/jobRouter.js")
app.use('/jobs', jobRouter)

app.use('/', (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
