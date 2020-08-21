const City = require('../models/city')


//index
async function citiesIndex(req, res) {
  const cities = await City.find()
  res.status(200).json(cities)
}

//show
async function citiesShow(req, res) {
  try {
    const city = await City.findById(req.params.id)
    if (!city) throw new Error()
    res.status(200).json(city)
  } catch (err) {
    res.json(err)
  }
}

//create
async function citiesCreate(req, res) {
  try {
    const createdCities = await City.create(req.body)
    res.status(201).json(createdCities)
  } catch (err) {
    res.json(err)
  }
}

//delete
async function citiesDelete(req, res) {
  try {
    await City.findByIdAndDelete(req.params.id)
    res.sendStatus(204)
  } catch (err) {
    res.json(err)
  }
}

//edit
async function citiesEdit(req, res) {
  try {
    const editedCities = await City.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true })
    res.status(202).json(editedCities)
  } catch (err) {
    res.json(err)
  }
}


module.exports = {
  index: citiesIndex,
  show: citiesShow,
  create: citiesCreate,
  delete: citiesDelete,
  edit: citiesEdit
} 