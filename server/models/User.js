// server/models/User.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength:[20, 'name cannot be more than 20']

    },
    password: { type: String, 
        required: true },
})
const User = mongoose.model('User', userSchema);

module.exports = User;