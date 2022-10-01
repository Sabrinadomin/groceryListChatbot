require('dotenv').config()
const mongoose = require('mongoose')

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
  } catch(err){
    console.error(err.message)
  }
}

module.exports = {
  connectDb
}