const http = require('http');
const url = require('url');//这个主要是用来获取请求参数 和 path地址的

const app = http.createServer();
app.on('request', (req, res) => {
    //获取请求的方式
    if (req.method == 'POST') {
        //GET POST
    }
    //获取请求路径
    req.url  //返回值是'/index  /list' 路径  而不是全路径

    //获取请求报文
    req.headers  //如果获取具体的值的话 用
    req.headers['accept'] //去获取

    //获取请求参数 并转换成对象
    //第一个是参数：要解析的url地址
    //第二个参数:是否将参数解析成对象
    // url.parse(req.url,true);
    // let params = url.parse(req.url, true).query;
    // let name = params.name;
    // let age = params.age;
    //高级写法  解构  得到请求参数query 和 路径名称path
    let { query, pathname } = url.parse(req.url, true);
    // query.age  query.name  拿到参数值

    //响应：
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8',
    });//服务器错误  状态码

    res.end('<h1>hi,user</h1>');
});
app.listen(3000);
console.log('开始监听了....');

