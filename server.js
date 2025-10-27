const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const PORT = process.env.PORT || 3000

const AuthRouter = require("./routes/auth")
const placeRouter = require("./routes/placeRoute")
const jobRouter = require("./routes/jobRouter.js")
const bookingRouter = require("./routes/bookingRouter")
const userRouter = require("./routes/userRouter")

const db = require("./db")

const path = require("path")
app.use(express.static(path.join(__dirname, "public")))
const upload = require("./middleware/upload")

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/jobs", jobRouter)
app.use("/place", placeRouter)
app.use("/auth", AuthRouter)
app.use("/bookings", bookingRouter)
app.use("profile", userRouter)

app.use("/", (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
