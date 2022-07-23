var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('dashboard');
});

/* GET users listing. */

router.get('/create', function(req, res, next) {
  res.render('create');
});

/* GET users listing. */

router.get('/read', function(req, res, next) {
    res.render('read');
  });

/* GET users listing. */
  
router.get('/update', function(req, res, next) {
    res.render('update');
  });
  
/* GET users listing. */

router.get('/delete', function(req, res, next) {
    res.render('delete');
  });

module.exports = router;