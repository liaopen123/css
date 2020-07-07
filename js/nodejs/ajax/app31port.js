const express = require('express');
const path = require('path');
const formidable = require("formidable");
const app = express();
const session = require('express-session');

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    //通过CORS解决跨域问题
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});
// 引入body-parser模块
const bodyParser = require('body-parser');
// 配置body-parser模块
app.use(bodyParser.urlencoded({ extended: false }));
//添加session
app.use(session({ secret: 'secret key' }));
app.get('/better', (req, res) => {
    // 接收客户端传递过来的函数的名称
    //const fnName = req.query.callback;
    // 将函数名称对应的函数调用代码返回给客户端
    //const data = JSON.stringify({name: "张三"});
    //const result = fnName + '('+ data +')';
    // setTimeout(() => {
    // 	res.send(result);
    // }, 1000)
    res.jsonp({ name: 'lisi', age: 20 });
});
app.get('/cross', (req, res) => {
    res.send('ok')
});
app.post('/login', (req, res) => {
    let form = formidable.IncomingForm();
    form.parse(req, (err, fields, file) => {
        let { account } = fields;
        console.log("account", account);

        if (account == "lph") {
            req.session.isLogin = true;
            return res.send('登录成功');
        } else {
            return res.send('登录失败');
        }
    });

});
app.post('/checkLogin', (req, res) => {
    let form = formidable.IncomingForm();
    form.parse(req, (err, fields, file) => {
        let { account } = fields;
        console.log("req.session.isLogin", req.session.isLogin);
        if (req.session.isLogin) {
            return res.send('确实是登录了的');
        } else {
            return res.send('确实是没有登录');
        }
    });

});


app.listen(3031);
console.log("server start");
