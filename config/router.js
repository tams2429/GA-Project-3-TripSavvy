const router = require('express').Router()
const cities = require('../controllers/cities')
const auth = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

//routes:

router.route('/cities')
  .get(cities.index)
  .post(secureRoute, cities.create)

router.route('/cities/:id')
  .get(cities.show)
  .delete(secureRoute, cities.delete)
  .put(secureRoute, cities.edit)

router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

module.exports = router

