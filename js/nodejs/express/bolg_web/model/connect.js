const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog", { useNewUrlParser: true, useUnifiedTopology: true }).then(
    _ => { console.log('connect success'); }
);