const Create = require('../model/create');


//create_read_all   => to see all
//create_read_single => To see one
//create_post => make new create
//create_delete => to delete
//create_form => get form to make new create

const create_read_all = (req, res) => {
    Create.find()
        .then((result) => {
            res.render('read', { creates: result })
        })
        .catch((error) => {
            console.error("couldnt get created posts")
        })
}

const create_read_single = (req, res) => {
    const id = req.params.id;
    Create.findById(id)
        .then((result) => res.render('singleCreate', { creates: result }))
        .catch((error) => console.error('not create find'))
}

const create_form = (req, res) => res.render('create');

const create_post = (req, res) => {
    console.log(req.body);
    const create = new Create(req.body);
    create.save()
        .then((result) => {
            res.redirect('/dashboard/read')
        })
        .catch((error) => {
            console.log(error)
        })
}
module.exports = {
    create_read_all,
    create_read_single,
    create_form,
    create_post
}