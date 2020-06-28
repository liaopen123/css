const template = require('art-template');
const path = require('path');

const filePath = path.join(__dirname, 'views', '标准语法和原始语法.art')
const html = template(filePath, { value: '廖鹏辉', a: 20, b: 20, c: 30, html: '<h1>我是html内容</h1>', myList: [2, 3, 4, 5, 6, 7] });

console.log(html);
