import express from 'express'
import dotenv from 'dotenv'
import connectDB from './src/db/db.js'
dotenv.config()

const app = express()
const url = process.env.MONGO_URL

app.get("/", (req, res) => {
  res.send("Welcome to Event Aggregator")
})

connectDB(url)

app.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.PORT}`)
})