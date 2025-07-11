import express from 'express'
import dotenv from 'dotenv'
import connectDB from './src/db/db.js'
import authRouter from './src/routes/v1/auth.routes.js'
dotenv.config()

const app = express()
const url = process.env.MONGO_URL

app.use(express.json())

app.use("/api/v1/auth", authRouter)

app.get("/", (req, res) => {
  res.send("Welcome to Event Aggregator")
})

connectDB(url)

app.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.PORT}`)
})