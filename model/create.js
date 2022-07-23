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
        required: false
    },
    tags: {
       type: [String],
       required: true 
    },
    ownerId: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Create = mongoose.model('Create', createSchema)


