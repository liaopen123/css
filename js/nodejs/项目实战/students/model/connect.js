const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/student', { useNewUrlParser: true, useUnifiedTopology: true }).then(_ => console.log('链接成功')
);