var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.send('login page');
});

router.get('/signup', function(req, res, next) {
  res.send('signup page');
});

module.exports = router;
