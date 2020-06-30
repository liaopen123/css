const express = require('express');
const path = require('path');
const { template } = require('express-art-template');

const app = express();
//第一个参数是 文件后缀
app.engine('art', require('express-art-template'));
//指定模板存放的文件夹
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'art');
app.get('/', (req, rsp) => {
    const filePath = path.join(__dirname, 'views', '标准语法和原始语法.art')
    const html = template(filePath, { value: '廖鹏辉', a: 20, b: 20, c: 30, html: '<h1>我是html内容</h1>', myList: [2, 3, 4, 5, 6, 7] });
    rsp.send(html);
});

app.listen(80);
console.log("server start");

