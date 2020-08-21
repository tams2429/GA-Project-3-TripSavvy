const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const City = require('../models/city')
const cityData = require('./data/cities')


mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  async (err, db) => {

    if (err) { 
      console.log(err)
      return
    }

    try {

      await db.dropDatabase() //  empty the database of all previous data

      console.log('Database Dropped 👍')

      const cities = await City.create(cityData) //  We re create all that data

      console.log(`${'🌇 '.repeat(cities.length)} Cities created `)

      await mongoose.connection.close() //  close the connection to the database

      console.log('Goodbye 👋')

    } catch (err) {

      await mongoose.connection.close()

      console.log(err) //  if anything goes wrong after connecting, just log error and stop
    }
  })

