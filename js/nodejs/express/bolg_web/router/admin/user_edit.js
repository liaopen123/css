const url = require("url");
const mongoose = require('mongoose');
const User = require("../../model/user");

const user_edit = async function (req, res) {
    let { id } = req.query;
    let currentUser = {};
    let link = "";
    if (id) {
        currentUser = await User.findOne({ _id: id });
        link = `/admin/user-modify?id=${id}`;
    } else {
        link = "/admin/user-edit";
    }
    console.log("拿到currentUser:", currentUser);

    res.render('./admin/user-edit', { id: id, user: currentUser, link });
}

module.exports = user_edit;