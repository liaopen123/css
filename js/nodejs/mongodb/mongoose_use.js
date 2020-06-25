// const mongoose = require('mongoose');
// //lph_test 为数据库的名称  如果不存在 MongoDB会自动创建。
// mongoose.connect("mongodb://localhost:27017/lph_test", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
//     console.log('load success');
//     createCourse();
// }).catch(() => {
//     console.log('load failed');
// });


// /**
//  * 创建课程的集合
//  */
// function createCourse() {

//     //创建集合 分为两步
//     //1.对集合设定规则  2.创建集合并应用规则
//     //1.对集合设定规则
const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    author: String,
    isPublished: Boolean,
});
//     //2.创建集合并应用规则   第一个参数是集合的名称 大写
//     const Course = mongoose.model('Course', courseSchema); //返回构造函数
//     //插入数据

//     const english = new Course({
//         name: 'English',
//         author: 'Liao',
//         isPublished: true,

//     });
//     english.save();  //当有数据保存的时候 才会去创建数据库。创建空的数据库是不行滴。
// }

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

const Cat = mongoose.model('Cat', { name: String });
//插入的方式1
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

//插入的方式2.1
Cat.create({ name: 'chujiu' }, (error, doc) => {
    if (error == null) {
        console.log(doc); //当前插入的文档
    } else {
        console.log(error);

    }
})
//2.2
Cat.create({ name: 'chujiu' }).then(doc => {
    console.log(doc);
}).catch(err => {
    console.log(err);

});




