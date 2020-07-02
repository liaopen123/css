const express = require('express');

const user = express.Router();

user.get('/', (req, resp) => {
    resp.send('接收到get请求');
});
user.post('/', (req, resp) => {
    console.log(req.body);

    resp.send('接收到post请求');
});

module.exports = user;

