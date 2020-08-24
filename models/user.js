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
  .virtual('wishlistedCities', { // ! <-- name of the virtual field
    ref: 'City', // ! <-- name of the other Model as a reference
    localField: 'username', // ! <-- the field from this model to match, so our users._id
    foreignField: 'wishlistedUsers' // ! <-- and the field to match is against on the City model
  })

// userSchema
//   .virtual('favoritedCities', { // ! <-- name of the virtual field
//     ref: 'City', // ! <-- name of the other Model as a reference
//     localField: '_id', // ! <-- the field from this model to match, so our users._id
//     foreignField: 'user' // ! <-- and the field to match is against on the City model
//   })

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
