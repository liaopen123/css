const http = require('http');

const app = http.createServer();
app.on('request', (req, res) => {
    res.end('<h1>hi,user</h1>');
});
app.listen(3000);
console.log('开始监听了....');

