const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.get('', (req, res) => {
    let result = "";
    for (key in req.query) {
        result += `${key} = ${req.query[key]},`
    }
    res.end(result);
});

//写法   http://localhost:3000/index/1888
app.get("/index/:id", (req, res) => {
    console.log(req.params);

    res.end(`${req.params.id}`);
});

//获取post 需要三方 body-parser
//先配置body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.post('', (req, res) => {
    console.log(req.body);
    let result = "";
    for (key in req.query) {
        result += `${key} = ${req.query[key]},`
    }
    res.end(result);
});
app.listen(3000);
console.log('website load success');
