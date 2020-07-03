const loginGuard = function (req, resp, next) {
    console.log("req", req.session);

    if (req.url != '/login' && !req.session.userName) {
        resp.redirect("/admin/login");
    } else {
        next();
    }
};


module.exports = loginGuard;