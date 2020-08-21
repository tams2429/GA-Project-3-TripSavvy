const router = require('express').Router()
const cities = require('../controllers/cities')


//routes:

router.route('/cities')
  .get(cities.index)
  .post(cities.create)


router.route('/cities/:id')
  .get(cities.show)

module.exports = router

