// custom middleware to ensure a user is logged in to gain access
const authorized = (req, res, next) => {
    if(!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
}

module.exports = authorized;