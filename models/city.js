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
  
  categories: [{ type: String, enum: ['beach', 'night', 'culture', 'snow', 'food', 'nature'], required: true }],

  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [commentSchema],
  wishlistedUsers: [],
  favoritedUsers: [] //to push users that favorited the city
} , {
  timestamps: true
})

citiesSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('City', citiesSchema)

