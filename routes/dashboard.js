var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('dashboard page');
});

/* GET users listing. */

router.get('/create', function(req, res, next) {
  res.send('create page');
});

/* GET users listing. */

router.get('/read', function(req, res, next) {
    res.send('read page');
  });

/* GET users listing. */
  
router.get('/update', function(req, res, next) {
    res.send('update page');
  });
  
/* GET users listing. */

router.get('/delete', function(req, res, next) {
    res.send('delete page');
  });

module.exports = router;