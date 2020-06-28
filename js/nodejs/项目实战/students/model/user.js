const mongoose = require('mongoose');
const Student = mongoose.model('Student', {
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10,
    },
    age: {
        type: Number,
        min: 10,
        max: 25,
    },
    sex: {
        type: String,
    },
    email: String,
    hobbies: String,
    collage: String,
    enterDate: {
        type: Date,
        default: Date.now,
    }
});

module.exports = Student;