const mongoose = require('mongoose')


const citySchema = new mongoose.Schema({ 
  name: { type: String, required: true, unique: true },
  country: { type: String, required: true },
  description: { type: String, required: true, maxLength: 400 },
  hasNightLife: { type: Boolean, required: true }, 
  hasFoodScene: { type: Boolean, required: true },
  hasCulture: { type: Boolean, required: true },
  hasBeach: { type: Boolean, required: true },
  hasSnow: { type: Boolean, required: true },
  hasNature: { type: Boolean, required: true }  
})


module.exports = mongoose.model('City', citySchema)
