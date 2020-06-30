const express = require('express');
const path = require('path');
const home = require('./router/home');
const admin = require('./router/admin');
const app = express();

//开放所有的静态文件
let staticFile = path.join(__dirname, 'public');
app.use(express.static(staticFile));
app.use('', home);
app.use('/admin', admin);

app.listen(80);
console.log("server start");




