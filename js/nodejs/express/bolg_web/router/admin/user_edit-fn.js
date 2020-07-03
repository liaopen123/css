const User = require("../../model/user");

const user_edit = async function (req, res) {
    let user = new User(req.body);
    const value = await user.save();
    console.log(value);
    if (value) {
        res.redirect('./user');
    }
}

module.exports = user_edit;



