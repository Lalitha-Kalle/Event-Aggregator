import mongoose from 'mongoose'
import  dotenv  from 'dotenv'
dotenv.config()

const connectDB = (url) => {
  mongoose.connect(url)
  .then(() => {
    console.log('DB connected')
  })
  .catch((err) => {
    console.log('Not connected', err)
  })
}  

export default connectDB