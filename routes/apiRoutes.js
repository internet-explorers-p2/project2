var express = require("express");
var router = express.Router();
var db = require("../models");
const passport = require("passport");
require("../controllers/google-auth")

router.post("/dashboard", (req, res) => {
	let goalData = req.body

	db.Goal.create(goalData).then((data)=>{
		console.log("data added to db");
		location.reload()
	})
		
})



// ========== AUTHENTICATION STARTS HERE ===========
// authentication login

  router.get("/login", (req, res) => {
    res.render("/")
  })

  // authentication logout
  router.get("/logout", (req, res) => {
    // passport stuff will go here
	req.logout();
	res.redirect("/");
	
  })

  // authentication with google
  router.get("/google", passport.authenticate("google", {
    scope:["profile", "email"]
  }))

  //callback route for google to redirect to
  router.get("/google/redirect", passport.authenticate("google"),(req,res) => {
	// res.send(req.user)
	res.redirect("/dashboard")
  })
// }
// ========= AUTHENTICATION ENDS HERE ===============

module.exports = router;
