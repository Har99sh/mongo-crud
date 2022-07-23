var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.render('login');

});

// router.get('/signup', function(req, res, next) {
//   const user = new User({
//     username: "har99sh",
//     email: "deep99harsh@gmail.com",
//     name: "Harsh 2",
//     password: "potato"    
//   })
//   user.save()
//   .then((result) => res.send(result))
//   .catch ((error) => res.send(error))
// });

// router.get('/users-db', function (req, res, next){
//   User.find()
//     .then((result) => res.send(result))
//     .catch ((error) => res.send(error))
// })

// router.get('/userID', function (req, res, next){
//   User.findById('62dc4a88ee41d8f7126836b9')
//     .then((result) => res.send(result))
//     .catch ((error) => res.send(error))
// })
module.exports = router;
