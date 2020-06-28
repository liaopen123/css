const http = require('http');
require('./model/connect');
const Student = require('./model/user');
const getRouter = require('router');
const template = require('art-template');
const path = require('path');
const querystring = require('querystring'); //把post的参数解析出来
const serverStatic = require('serve-static');
const serve = serverStatic('public');
const router = getRouter();
router.get('/', (req, res) => {
    //把模板解析出来
    const filePath = path.join(__dirname, 'views', 'index.art')
    const html = template(filePath, {});
    res.end(html);
})
router.post('/add', (req, res) => {
    let params = "";
    // POST 参数获取  通过实践方式接受  传递的时候 触发data事件, 结束触发end事件
    req.on('data', ps => {
        params += ps;

    });
    req.on('end', () => {
        console.log('params:', params);
        let paramter = querystring.parse(params);  //contentType为application/x-www-form-urlencoded 的时候这样子解析还行 json就不行了
        console.log(paramter.age);
        console.log(paramter.name);

    });

    res.end('<h1>hi,user</h1>');
})


const app = http.createServer();
app.on('request', (req, resp) => {
    router(req, resp, () => {
        //请求成功后 router方法会调用这个方法
    });
    serve(req, resp, () => {
        //请求成功后 server-static方法会调用这个方法
    });

});
app.listen(80);
console.log('开始监听');
