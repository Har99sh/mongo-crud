const mongoose = require('mongoose');
 
// Creat a variable with mongoose schema constructor
const Schema = mongoose.Schema;

//set schema using the constructor
const userSchema = new Schema ({
    username: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
}, {timestamps: true});

//Mongoose model looks in our db for collections with that name, automatically pluralizes
//take the schema as seconf argument

const User = mongoose.model('User', userSchema);

module.exports = User;