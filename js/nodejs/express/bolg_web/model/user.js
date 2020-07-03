const mongoose = require('mongoose');
const User = mongoose.model('User', new mongoose.Schema({
    nickName: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,//保证不重复

    },
    password: {
        type: String,
        minlength: 6,
        maxlength: 20,
    },
    role: {
        type: Number,
        enum: [0, 1],
    },
    state: {
        type: Number,
        default: 0,
        enum: [0, 1],
    }

}));

module.exports = User;