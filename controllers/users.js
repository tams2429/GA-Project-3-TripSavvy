const User = require('../models/user')
const { notFound } = require('../lib/errorMessage')


async function userProfile(req, res, next) {
  try {
    const user = await User.findById(req.currentUser._id).populate('wishlistedCities').populate('favoritedCities')
    if (!user) throw new Error(notFound) 
    res.status(200).json(user)
  } catch (err) {
    next(err) 
  }
}

async function profileEdit(req, res, next) {
  try {
    const userToBeEdited = await User.findById(req.currentUser._id)
    Object.assign(userToBeEdited, req.body) 
    await userToBeEdited.save() 
    res.status(202).json(userToBeEdited) 
  } catch (err) {
    next(err)
  }
}

module.exports = {
  profile: userProfile,
  profileEdit: profileEdit
}
