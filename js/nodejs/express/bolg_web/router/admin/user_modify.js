const User = require("../../model/user");

const user_modify = async function (req, res) {
    const { id } = req.query;
    let user = new User(req.body);


    let result = await User.updateOne({ _id: id }, req.body);

    console.log(result);
    if (result) {
        res.redirect('./user');
    }
}

module.exports = user_modify;



