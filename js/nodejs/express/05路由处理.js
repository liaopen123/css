const express = require('express');
const app = express();
//创建路由对象
const home = express.Router();

app.use((req, res, next) => {
    console.log(req.url);
    next();
});
//一级
app.use('/home', home);
//二级 /home/index
home.get('/index', (req, res) => {
    res.send("欢迎来到博客首页");
});


app.listen(80);
console.log('website load success');
