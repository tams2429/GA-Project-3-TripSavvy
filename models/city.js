const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 300 },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})


const citiesSchema = new mongoose.Schema({ 
  name: { type: String, required: true, unique: true },
  country: { type: String, required: true },
  description: { type: String, required: true, maxLength: 400 },
  hasNightLife: { type: Boolean, required: true }, 
  hasFoodScene: { type: Boolean, required: true },
  hasCulture: { type: Boolean, required: true },
  hasBeach: { type: Boolean, required: true },
  hasSnow: { type: Boolean, required: true },
  hasNature: { type: Boolean, required: true }, 
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [commentSchema]
} , {
  timestamps: true
})

citiesSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('City', citiesSchema)
