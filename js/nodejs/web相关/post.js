const http = require('http');
const querystring = require('querystring'); //把post的参数解析出来


const app = http.createServer();
app.on('request', (req, res) => {
    //获取请求的方式
    if (req.method == 'POST') {
        //GET POST
        let params = "";
        // POST 参数获取  通过实践方式接受  传递的时候 触发data事件, 结束触发end事件
        req.on('data', ps => {
            params += ps;

        });
        req.on('end', () => {
            let paramter = querystring.parse(params);  //contentType为application/x-www-form-urlencoded 的时候这样子解析还行 json就不行了
            console.log(paramter.age);
            console.log(paramter.name);

        });

        res.end('<h1>hi,user</h1>');
    }


});
app.listen(3000);
console.log('开始监听了....');

