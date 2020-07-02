const loginGuard = function (req, resp, next) {
    if (req.url != '/login' && !req.session.username) {
        resp.redirect("/admin/login");
    } else {
        next();
    }
};


module.exports = loginGuard;