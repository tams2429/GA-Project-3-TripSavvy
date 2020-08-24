const router = require('express').Router()
const cities = require('../controllers/cities')
const auth = require('../controllers/auth')
const users = require('../controllers/users')
const secureRoute = require('../lib/secureRoute')

//routes:

router.route('/cities')
  .get(cities.index)
  .post(secureRoute, cities.create)

router.route('/cities/:id')
  .get(cities.show)
  .delete(secureRoute, cities.delete)
  .put(secureRoute, cities.edit)
  .post(secureRoute, cities.addToWishList)

router.route('/cities/:id/comments')
  .post(secureRoute, cities.commentCreate)

router.route('/cities/:id/comments/:commentId')
  .delete(secureRoute, cities.commentDelete)

router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

router.route('/profile') // ? Route for a profile
  .get(secureRoute, users.profile) // ? uses GET and MUST be  secureRoute, if its not, you would not know who you are supposed to be fetching the profile for.

module.exports = router