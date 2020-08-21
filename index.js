const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dbURI = 'mongodb://localhost/put-your-db-name here'
const port = 5000

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true },
  (err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('Mongo is Connected')
  }
)

// * Create your Schema here


// * Register your Schema as a model here


// * Create your restful route handlers below, eg. app.get, app.post


app.listen(port, () => console.log(`Lisening on Port: ${port}`))
