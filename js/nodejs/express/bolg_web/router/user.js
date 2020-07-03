const express = require('express');
const User = require("../model/user");


const user = express.Router();

user.get('/', async (req, resp) => {
    let myList = await User.find();
    console.log(myList);

    resp.render("./admin/user", { myList });
});
user.post('/', (req, resp) => {
    console.log(req.body);

    resp.send('接收到post请求');
});

module.exports = user;

