const express = require('express');
const User = require('../model/user');
const login = express.Router();

login.get('', (req, resp) => {
    resp.render('./admin/login');
});
login.post('', async (req, resp) => {
    let email = req.body.email;
    let pwd = req.body.pwd;
    //避免回调地狱  用async和await去搞定。
    // User.findOne({ 'email': email }).then(result => {
    //     console.log(result);
    //     if (result == null) {
    //         resp.status(400).send("邮箱不存在,请先注册");
    //     } else {
    //         if (result.password == pwd) {
    //             resp.send('密码正确,跳转到用户编辑页');

    //         } else {
    //             resp.status(400).send("密码错误");
    //         }
    //     }

    // }).catch();

    let result = await User.findOne({ 'email': email });
    if (result == null) {
        resp.status(400).send("邮箱不存在,请先注册");
    } else {
        if (result.password == pwd) {
            //保存email到session
            req.session.userName = result.email;

            // resp.send('密码正确,跳转到用户编辑页:' + req.session.userName);

            //重定向 跳转到 user-edit
            req.app.locals.UserInfo = result;
            resp.redirect("/admin/user-edit");

            //
        } else {
            resp.status(400).send("密码错误");
        }
    }
});

module.exports = login;





