var express = require("express");
var router = express.Router();
var db = require("../models");
const passport = require("passport");
require("../controllers/google-auth")


// module.exports = function(app) {
	// Get all examples
	router.get("/api/users", function(req, res) {
    console.log("something");
		db.User.findAll({}).then(function(users) {
      
			res.json(users)
		})
	})

	// // Create a new example
	// app.post("/api/examples", function(req, res) {
	// 	db.Example.create(req.body).then(function(dbExample) {
	// 		res.json(dbExample)
	// 	})
	// })

	// // Delete an example by id
	// app.delete("/api/examples/:id", function(req, res) {
	// 	db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
	// 		res.json(dbExample)
	// 	})
	// })



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
	res.redirect("/dashboard/")
  })
// }
// ========= AUTHENTICATION ENDS HERE ===============

// module.exports = function(app) {
//   // Get all examples
//   app.get("/api/examples", function(req, res) {
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.json(dbExamples);
//     });
//   });

//   // Create a new example
//   app.post("/api/examples", function(req, res) {
//     db.Example.create(req.body).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
// }

module.exports = router;
