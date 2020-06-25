const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const mime = require('mime');

let app = http.createServer();
app.on('request', (req, res) => {
    let pathName = url.parse(req.url).pathname;
    let path1 = path.join(__dirname, "static_project", 'shopping', pathName);
    console.log(path1);
    /**
     *content-type': 'text/html 是声明文件返回的类型  
    但是有时候 请求不可能一直都是html文件 需要更具文件的类型进行返回
    因此需要通过mime 这个包 获取mimeType
     **/
    mimeType = mime.getType(path1);
    console.log(mimeType);

    res.writeHeader('200', {
        'content-type': `${mimeType};charset=utf8`
    });
    //牛逼
    fs.readFile(path1, (error, result) => {
        if (error == null) {
            res.end(result);
        }
    });
});

app.listen(3000);