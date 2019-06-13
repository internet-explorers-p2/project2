var router = require('express').Router();
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      console.log("Youre authenticated");
      console.log(req);
      res.redirect('/dashboard')
    } else{  
        console.log("you are NOT authenticated");
        console.log(req);
        
        res.redirect('/')

    }
    }
  
  router.get('/dashboard', ensureAuthenticated, function(req, res) {
      res.render('dashboard')
  });
module.exports = router;