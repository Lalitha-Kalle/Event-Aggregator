import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()

app.get("/", (req, res) => {
  res.send("Welcome to Event Aggregator")
})

app.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.PORT}`)
})