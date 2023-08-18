const authMiddleware = (req, res, next) => {
    // Check if user is logged in
    if (!req.session.loggedIn) {
        res.redirect('/login');
        return;
    }


    next();
};

module.exports = authMiddleware;
