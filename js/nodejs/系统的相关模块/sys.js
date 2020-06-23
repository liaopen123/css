let fs = require('fs');
let path = require('path');
// //读取模块
// fs.readFile('../模块导出和使用/use.js', 'utf-8', (error, doc) => {

//     if (doc != null) {
//         console.log(doc);
//     }
// });

// //写入模块
// fs.writeFile('./test.txt', '我就是一个小小的test', error => {
//     if (error != null) {
//         console.log(error);
//         return;
//     }
//     console.log('write success');

// });
// //写入模块
fs.writeFile(path.join(__dirname, './test.txt'), '我就是一个小小的testTT', error => {
    if (error != null) {
        console.log(error);
        return;
    }
    console.log('write success');

});
