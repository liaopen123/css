const fs = require('fs');
const promisify = require('util').promisify;//先拿到方法

// async function getCount() {
//     return 1233333;
// }

// getCount().then(result => {
//     console.log(result);
// });


const readFile = promisify(fs.readFile);


async function run() {
    let r1 = await readFile('../1.txt', 'utf8');
    let r2 = await readFile('../2.txt', 'utf8');
    let r3 = await readFile('../3.txt', 'utf8');

    console.log(`await${r1}`);
    console.log(r2);
    console.log(r3);


}

run();