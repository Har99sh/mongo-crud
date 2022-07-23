var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Create = require('../model/create');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('dashboard');
});

/* GET users listing. */

router.get('/create', function (req, res, next) {
  //res.render('create');
  const create = new Create ({
    description: "2 test post for database",
    image: "image url expected",
    likes: 23,
    tags: ["test2", "data2"],
    username: "har99sh"
 })

 create.save()
 .then((result) => res.send(result))
 .catch((error) => console.log(error))
});

/* GET users listing. */

router.get('/read', function (req, res, next) {
  res.render('read');
});

/* GET users listing. */

router.get('/update', function (req, res, next) {
  res.render('update');
});

/* GET users listing. */

router.get('/delete', function (req, res, next) {
  res.render('delete');
});

module.exports = router;