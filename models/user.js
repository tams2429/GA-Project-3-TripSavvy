const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxlength: 50 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String },
  about: { type: String, maxLength: 400 }
})

userSchema
  .virtual('favoritedCities', {
    ref: 'City', 
    localField: '_id', 
    foreignField: 'favoritedUsers'   
  })

userSchema
  .virtual('wishlistedCities', { 
    ref: 'City', 
    localField: '_id',
    foreignField: 'wishlistedUsers'  
  })

userSchema 
  .set('toJSON', {
    virtuals: true,
    transform(doc, json) {
      delete json.passwords
      return json
    }
  })

userSchema
  .virtual('passwordConfirmation')
  .set(function (passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

userSchema
  .pre('validate', function (next) { 
    if (this.isModified('password') && this.password !== this._passwordConfirmation) {
      this.invalidate('passwordConfirmation', 'does not match')
    }
    next()
  })

userSchema
  .pre('save', function(next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
    }
    next()
  })

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

userSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('User', userSchema)
