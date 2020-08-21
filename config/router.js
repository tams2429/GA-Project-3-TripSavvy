const router = require('express').Router()
const cities = require('../controllers/cities')


//routes:

router.route('/cities')
  .get(cities.index)

module.exports = router

