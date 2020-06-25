const fs = require('fs');
const { resolve } = require('path');


// let promise = new Promise((resolve, reject) => {
//     setTimeout(
//         function () {
//             if (false) {
//                 resolve('lph');
//             } else {
//                 reject('failed');
//             }

//         }, 2000
//     );
// });
// promise.then(result => console.log(result)).catch(error => console.log(error));
//不用promise的写法:
// fs.readFile('./1.txt', (error, result) => {
//     console.log(result.toString());
//     fs.readFile('./2.txt', (error, result) => {
//         console.log(result.toString());
//         fs.readFile('./3.txt', (error, result) => {
//             console.log(result.toString());
//         });
//     });
// });


//现在使用promise写法:

function p1() {
    return new Promise((resolve, reject) => {
        fs.readFile('./1.txt', (error, result) => {
            resolve(result.toString());
        });
    });
}
function p2() {
    return new Promise((resolve, reject) => {
        fs.readFile('./2.txt', (error, result) => {
            resolve(result.toString());
        });
    });
}
function p3() {
    return new Promise((resolve, reject) => {
        fs.readFile('./3.txt', (error, result) => {
            resolve(result.toString());
        });
    });
}

p1().then(result => {
    console.log(`链式编程${result}`);
    return p2();

}).then(result => {
    console.log(`链式编程${result}`);
    return p3();

}).then(result => {
    console.log(`链式编程${result}`);

})