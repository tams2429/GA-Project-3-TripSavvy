const City = require('../models/city')

async function citiesIndex(req, res) {
  const cities = await City.find()
  res.status(200).json(cities)
}


module.exports = {
  index: citiesIndex
}