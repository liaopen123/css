const express = require('express');
const admin = express.Router();

admin.get('', (req, res) => {
    res.send('欢迎来到admin');
})

module.exports = admin;