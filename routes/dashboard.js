var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Create = require('../model/create');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('dashboard');
});
/* Create users listing. */
router.get('/create', function (req, res, next) {
  res.render('create');
});


// router.get('/create', function (req, res, next) {
//   //res.render('create');
//   const create = new Create ({
//     description: "2 test post for database",
//     image: "image url expected",
//     likes: 23,
//     tags: ["test2", "data2"],
//     username: "har99sh"
//  })

//  create.save()
//  .then((result) => res.send(result))
//  .catch((error) => console.log(error))
// });

/* Read users listing. */

router.get('/read', function (req, res, next) {
  Create.find()
    .then((result) => {
      res.render('read', {creates: result})
    })
    .catch((error) => {
      console.error("couldnt get created posts")
    })
});

router.post('/read', function (req, res, next) {
  console.log(req.body);
  const create = new Create(req.body);
  create.save()
    .then((result) => {
      res.redirect('/dashboard')
    })
    .catch((error) => {
      console.log(error)
    })
});

router.get('/read/:id', function (req, res ,next){
  console.log(req.params.id);
  const id = req.params.id;
  Create.findById(id)
    .then((result) => res.render('singleCreate', {creates: result}))
    .catch((error) => console.error('not create find'))
})
/* Update users listing. */

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