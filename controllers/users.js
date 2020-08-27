const User = require('../models/user')
const { notFound } = require('../lib/errorMessage')

//  The URL for this profile route will just be /profile

async function userProfile(req, res, next) {
  try {
    console.log(req.currentUser._id)
    console.log(await User.findById(req.currentUser._id))
    const user = await User.findById(req.currentUser._id).populate('wishlistedCities').populate('favoritedCities')
    console.log(user)
    if (!user) throw new Error(notFound) 
    res.status(200).json(user)
  } catch (err) {
    next(err) 
  }
}

async function profileEdit(req, res, next) {
  try {
    const userToBeEdited = await User.findById(req.currentUser._id)
    console.log(userToBeEdited)
    Object.assign(userToBeEdited, req.body) 
    await userToBeEdited.save() 
    res.status(202).json(userToBeEdited) 
  } catch (err) {
    next(err)
  }
}

// If I wanted to allow other users to view profiles, I would set this up more like a show route controllers, with a url like "users/:id"

module.exports = {
  profile: userProfile,
  profileEdit: profileEdit
}
