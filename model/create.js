const mongoose = require('mongoose');
 
// Creat a variable with mongoose schema constructor
const Schema = mongoose.Schema;

const createSchema = new Schema ({
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    tags: {
       type: [String],
       required: true 
    },
    username: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Create = mongoose.model('Create', createSchema);

module.exports = Create;



