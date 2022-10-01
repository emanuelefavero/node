var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  const myName = 'John'
  res.render('index', { title: 'Express', name: myName })
})

module.exports = router
