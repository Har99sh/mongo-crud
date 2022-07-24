var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const createController = require('../controller/createController');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('dashboard');
});
/* Create form. */
router.get('/create', createController.create_form);

/* Read users listing. */
router.get('/read', createController.create_read_all);

router.post('/read', createController.create_post);

/* Get single create details */
router.get('/read/:id', createController.create_read_single)

router.get('/update', function (req, res, next) {
  res.render('update');
});

/* Delete users listing. */

router.get('/delete', function (req, res, next) {
  res.render('delete');
});

router.delete('/delete/:id', function(res, req, next){
  const id = req.params.id;
  Create.findByIdAndDelete(id)
    .then((result) => res.send('Create deleted'))
    .catch((error) => console.log("not deleted error"))
});
module.exports = router;