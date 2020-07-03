const formidable = require("formidable");
const path = require("path");


const upload = async function (req, res) {
    //这个文件夹 是必须存在 否则会报错
    const uploadPath = path.join(__dirname, "../", "public", "uploads");
    const form = formidable.IncomingForm();
    form.uploadDir = uploadPath; //设置文件上传的地址
    form.keepExtensions = true; //是否保留扩展名
    form.parse(req, (err, fields, files) => {
        //fields 请求的字段
        //files 上传的文件信息
        console.log("err", err);
        console.log("fields", fields);
        console.log("files", files);
        res.send(files);
    });

}

module.exports = upload;



