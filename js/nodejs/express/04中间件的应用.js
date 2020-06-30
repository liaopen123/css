const express = require('express');
const fs = require('fs');
const app = express();

app.use((req, resp, next) => {
    console.log("走了use");
    next();
});
app.use("/request", (req, resp, next) => {
    console.log("走了use/request");
    next();
});
/**
 * 错误处理
 */
app.use((err, req, resp, next) => {
    resp.status(500).send('服务器发生错误');
});
app.get('/index', (req, res, next) => {
    req.name = "廖鹏辉";
    fs.readFile('./xxx', (err, data) => {
        if (err) {
            next(err);  //就会调用 app.use((err,req, resp, next)
        }
    });
    next();
});
app.get('/request', (req, res, next) => {
    req.name = "廖鹏辉";
    next();
});
app.get('/list', (req, res, next) => {
    res.send('list');
}); app.get('/request', (req, res, next) => {
    res.send('eee');
});
app.listen(80);
