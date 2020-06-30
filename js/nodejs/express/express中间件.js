const express = require('express');
const app = express();
app.get('/test', (req, res, next) => {
    req.name = "廖鹏辉";
    next();
});
app.get('/test', (req, res, next) => {
    res.send('eee');
});
app.listen(8080);
console.log('服务器已经启动');
