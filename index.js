const express = require('express')
const mongoose = require('mongoose')
const logger = require('./lib/logger')
const app = express()
const port = 5000
const { dbURI } = require('./config/environment')



mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true },
  (err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('Mongo is Connected')
  }
)



app.use(express.json())
app.use(logger)
app.listen(port, () => console.log(`Lisening on Port: ${port}`))
