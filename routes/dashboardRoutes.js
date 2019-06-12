var router = require('express').Router();
var authCheck = (req, res, next) => {
    if(!req.user){
        // if user is not logged in
        res.redirect("/");
    } else {
        // if logged in
        next();
    }
};


router.get("/dashboard", authCheck, (req,res) => {
    res.render("dashboard", {user: req.user})
})

module.exports = router;