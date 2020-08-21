const User = require('../models/user')

const jwt = require('jsonwebtoken')

const { secret } = require('../config/environment')


async function register(req, res, next) {
  try {
    const user = await User.create(req.body)
    res.status(201).json({ message: `Welcome ${user.username}` })
  } catch (err) {
    next(err)
  }
}




module.exports = {
  register
}