const express = require('express');
const path = require('path');
const formidable = require("formidable");
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// 引入body-parser模块
const bodyParser = require('body-parser');
// 配置body-parser模块
app.use(bodyParser.urlencoded({ extended: false }));




app.get("/ajax", (req, res) => {
    let { name, age } = req.query;
    console.log(name, age);

    res.send({ "name": "张三" });
});
app.post("/ajax", (req, res) => {
    console.log(req.body);

    // let { name, age } = req.body;
    // console.log(name, age);
    res.send({ "name": "张三444" });
})

// 配置body-parser模块
app.use(bodyParser.json());
app.post("/ajax_post_json", (req, res) => {
    console.log(req.body);

    // let { name, age } = req.body;
    // console.log(name, age);
    res.send({ "name": "张三444" });
});
app.get("/artdata", (req, res) => {
    res.send("张三");
})


app.post("/form_post", (req, res) => {
    //这个文件夹 是必须存在 否则会报错
    const uploadPath = path.join(__dirname, "../", "public", "uploads");
    const form = formidable.IncomingForm();
    form.uploadDir = uploadPath; //设置文件上传的地址
    form.keepExtensions = true; //是否保留扩展名
    form.parse(req, (err, fields, files) => {
        //fields 请求的字段
        //files 上传的文件信息
        console.log("err", err);
        console.log("fields", fields);
        console.log("files", files);
        res.send(fields.toString());
    });

})

app.post("/form_post_file", (req, res) => {
    //这个文件夹 是必须存在 否则会报错
    const uploadPath = path.join(__dirname, "public", "uploads");
    const form = formidable.IncomingForm();
    form.uploadDir = uploadPath; //设置文件上传的地址
    form.keepExtensions = true; //是否保留扩展名
    form.parse(req, (err, fields, files) => {
        //fields 请求的字段
        //files 上传的文件信息
        console.log("err", err);
        console.log("fields", fields);
        console.log("files", files);
        let url = "http://localhost:8080" + files.attrName.path.toString().substr(files.attrName.path.toString().indexOf('/uploads'));
        res.send(url);
    });

});


app.post('/base', (req, res) => {
    let form = formidable.IncomingForm();
    form.parse(req, (err, fields, file) => {
        return res.send('我是服务器返回数据');
    });

});
app.post('/post_params', (req, res) => {
    let { name, age } = req.body;
    console.log("name", name, age);
    res.send(`name:${name},age:${age}`);

});
app.post('/post_json_params', (req, res) => {
    let { name, age } = req.body;
    console.log("name", name, age);
    res.send(`name:${name},age:${age}`);

});
app.get("/j_get", (req, res) => {
    let { name, age } = req.query;
    res.send(`name:${name},,age:${age}`);
})

app.get("/j_post", (req, res) => {
    let { name, age } = req.query;
    res.send(`name:${name},,age:${age}`);
})

// RESTful风格的api
app.get("/users", (req, res) => {
    res.send('获取当前的所有列表');
});
app.post("/users/:id", (req, res) => {
    let id = req.params.id;
    res.send('查询当前id为' + id + '的值');
});
app.delete("/users/:id", (req, res) => {
    let id = req.params.id;
    res.send('删除当前id为' + id + '的值');
});
app.put("/users/:id", (req, res) => {
    let id = req.params.id;
    res.send('修改当前id为' + id + '的值');
});
app.listen(8080);
console.log("server start");


