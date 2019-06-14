var db = require("../models")
var express = require("express");
var router = express.Router();

// Load index page
	router.get("/", function (req, res) {
		res.render("index")
	})

	//this is the dashboard route. Using mock data to pretend data is being sent from the backend to test handlebars
	router.get("/dashboard", function(req, res) {
		res.render("dashboard", {
			username: "Im_a_fake_username",
			challengeOfTheDay: "This_a_mock_challenge" 
		})
	})


	// Load example page and pass in an example by id
	router.get("/example/:id", function (req, res) {
		db.Example.findOne({
			where: {
				id: req.params.id
			}
		}).then(function (dbExample) {
			res.render("example", {
				example: dbExample
			})
		})
	})

	// // Render 404 page for any unmatched routes
	// router.get("*", function (req, res) {
	// 	res.render("404")
	// })

module.exports=router;