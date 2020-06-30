const express = require('express');
const app = express();
app.get('/', (req, res) => {
    //send(): 好处:1.能够检测响应体的类型  2.自动响应 状态码  3.编码也是自动的
    app.send('hello');
});
app.listen(3000);
console.log('website load success');
