const router = require('express').Router()
const cities = require('../controllers/cities')
const auth = require('../controllers/auth')

//routes:

router.route('/cities')
  .get(cities.index)
  .post(cities.create)



router.route('/cities/:id')
  .get(cities.show)
  .delete(cities.delete)
  .put(cities.edit)


router.route('/register')
  .post(auth.register)

module.exports = router

