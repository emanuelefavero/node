var express = require('express')
var router = express.Router()

// Home page route - GET /
router.get('/', (req, res, next) => {
  res.redirect('/catalog')
})

module.exports = router
