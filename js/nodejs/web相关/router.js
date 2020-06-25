const http = require('http');
const url = require('url');
const querystring = require('querystring'); //把post的参数解析出来


const app = http.createServer();
app.on('request', (req, res) => {
    //1.获取请求的方式
    const method = req.method.toLowerCase();
    //2.获取请求地址 
    const pathname = url.parse(req.url, true).pathname;
    console.log();
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    });
    if (method == 'get') {
        if (pathname == '/' || pathname == '/index') {
            res.end("首页");
        } else if (pathname == '/list') {
            res.end("列表页");
        } else {
            res.end("页面不存在");
        }
    } else {
        //post
    }



});
app.listen(3000);
console.log('开始监听了....');

