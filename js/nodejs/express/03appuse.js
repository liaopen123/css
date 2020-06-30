const express = require('express');
const app = express();

app.use((req, resp, next) => {
    console.log("走了use");
    next();
});
app.use("/request", (req, resp, next) => {
    console.log("走了use/request");
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
