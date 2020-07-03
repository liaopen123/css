const express = require('express');
const path = require('path');
const home = require('./router/home');
const admin = require('./router/admin');
const upload = require('./router/upload_test');
const upload_get = require('./router/upload_get');
const bodyParser = require('body-parser');
const session = require('express-session');
const loginGuard = require('./middleware/loginGuard');
const app = express();

require('./model/connect');
// const User = require('./model/user');
// const pony = new User({ nickName: 'ssps', email: "467969@qq.com", password: '123456', role: 1, state: 1 });
// pony.save().then(_ => {
//     console.log('保存成功');
// });
//开放所有的静态文件
let staticFile = path.join(__dirname, 'public');
app.use(express.static(staticFile));

//关联art-template 模板
app.engine('art', require('express-art-template'));
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'art');


// 配置body-parser模块   用来解析post的参数
app.use(bodyParser.urlencoded({ extended: false }));

//配置session
app.use(session({ secret: 'secret key' }));//secret 秘钥  对数据加密 

app.use('/admin', loginGuard);
app.get('/upload', upload_get);
app.post('/upload', upload);

app.use('', home);
app.use('/admin', admin);

app.listen(80);
console.log("server start");




