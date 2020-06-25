const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lph_test', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    //success
    const User = mongoose.model('User', { name: String, age: Number, email: String, password: String, hobbies: [String] });
    //添加有3种方式 详情见 mongoose_use.js
    // new User({ name: '张三', age: 14, email: '4679691@qq.com', password: '1212323231', hobbies: ['read', 'swim'] }).save();
    // new User({ name: '张三1', age: 15, email: '4679691@qq.com', password: '12121', hobbies: ['read', 'tv'] }).save();
    // new User({ name: '张2', age: 16, email: '467969331@qq.com', password: '1232323121', hobbies: ['read', 'game'] }).save();
    // new User({ name: '张4', age: 17, email: '4679c691@qq.com', password: '121ewew21', hobbies: ['read', 'run'] }).save();
    // new User({ name: '张三5', age: 18, email: '46796xs91@qq.com', password: '12sd121', hobbies: ['read', 'sport'] }).save();
    // new User({ name: '张三4', age: 19, email: '46796ds91@qq.com', password: '121xzz21', hobbies: ['run', 'swim'] }).save();
    // new User({ name: '张四', age: 20, email: '46796wq91@qq.com', password: '121fe21', hobbies: ['basketball', 'swim'] }).save();
    // new User({ name: '张六', age: 21, email: '4679cxx691@qq.com', password: '12cx121', hobbies: ['football', 'swim'] }).save();
    // new User({ name: '张七', age: 22, email: '467969eee1@qq.com', password: '12vc121', hobbies: ['sleep', 'swim'] }).save();

    //查找
    //查找所有
    // User.find().then(result => console.log(result));
    //条件查询  id=xxx的所有数据
    // User.find({ '_id': '5ef311addde2de1221e263ec' }).then(result => console.log(result));
    // User.findOne({ '_id': '5ef311addde2de1221e263ec' }).then(result => console.log(result));
    //$gt  和$lt  大于和小于
    // User.find({ 'age': { $gt: 18, $lt: 21 } }).then(result => console.log(result));
    //包含关系
    // User.find({ 'hobbies': { $in: ['swim'] } }).then(result => console.log(result));
    //选择要查询的字段  只想要name 和age
    // User.find().select('name email').then(result => console.log(result));
    //将数据按照年龄进行升序排序
    //     User.find().sort('age').then(result => console.log(result));
    //     //将数据按照年龄进行降序排序
    //     User.find().sort('-age').then(result => console.log(result));
    //     //skip跳过多少条 限制多少条
    //     User.find().skip(2).limit(2).then(result => console.log(result));



    //删除  条件和查找的条件一样  返回值为删除的文档
    // //删除单个
    // User.findOneAndDelete({ '_id': '5ef311addde2de1221e263ec' }).then(result => console.log(result));
    // //删除多个  对象传空 删除全部
    // User.deleteMany({ '_id': '5ef311addde2de1221e263ec' }).then(result => console.log(result));

    //更新单个
    User.updateOne({ name: '张三' }, { name: "liao 11" }).then(result => console.log(result));
    //更新多个
    User.updateMany({ name: '张三' }, { name: "liao 11" }).then(result => console.log(result));

}).catch(e => console.log(e));


