const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const City = require('../models/city')
const cityData = require('./data/cities')
const User = require('../models/user')
const userData = require('./data/users')


mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  async (err, db) => {
    if (err) { 
      console.log(err)
      return
    }

    try {

      await db.dropDatabase() 

      console.log('Database Dropped 👍')

      const users = await User.create(userData) 

      console.log(`${'🙂'.repeat(users.length)} created`)

      let counter = 0

      const citiesWithUsers = cityData.map(city => { 
        city.user = users[0]._id

        if (counter < cityData.length / 2) {
          city.wishlistedUsers = users[0]._id
          counter += 6
        } else if (counter >= cityData.length / 2 && counter < cityData.length) {
          city.favoritedUsers = users[0]._id
          counter += 6
        }
        
        return city
      })

      const cities = await City.create(citiesWithUsers) 

      console.log(`${'🌇 '.repeat(cities.length)} Cities created `)

      await mongoose.connection.close() 

      console.log('Goodbye 👋')

    } catch (err) {

      await mongoose.connection.close()

      console.log(err) 
    }
  })

