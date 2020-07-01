const express = require('express');
const admin = express.Router();
admin.get('', (req, res) => {
    res.send('end');
});
admin.get('/login', (req, res) => {
    res.render('./admin/login');
});
admin.get('/user', (req, res) => {
    res.render('./admin/user');
});
admin.get('/user-edit', (req, res) => {
    res.render('./admin/user-edit');
});

module.exports = admin;