const template = require('art-template');
const path = require('path');

const filePath = path.join(__dirname, 'views', 'index.art')
const html = template(filePath, { data: { name: '张三', age: 20 } });

console.log(html);
