const User = require('../models/user')
const { notFound } = require('../lib/errorMessage')

//  The URL for this profile route will just be /profile

async function userProfile(req, res, next) {
  try {
    const user = await User.findById(req.currentUser._id).populate('wishlistedCities').populate('favoritedCities')
    if (!user) throw new Error(notFound) 
    res.status(200).json(user)
  } catch (err) {
    next(err) 
  }
}


// If I wanted to allow other users to view profiles, I would set this up more like a show route controllers, with a url like "users/:id"

module.exports = {
  profile: userProfile
}
