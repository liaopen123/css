const express = require('express');
const user = require('./user');
const login = require('./login');
const User = require('../model/user');
const admin = express.Router();
admin.get('', (req, res) => {
    res.send('end');
});
admin.use('/login', login);

admin.use('/user', user);
admin.get('/user-edit', (req, res) => {
    res.render('./admin/user-edit');
});

module.exports = admin;