const express = require('express');
const home = require('./06模块化路由home');
const admin = require('./06模块化路由admin');

const app = express();

app.use('/home', home);
app.use('/admin', admin);

app.listen(3000);

