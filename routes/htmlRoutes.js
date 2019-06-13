var db = require("../models")
var express = require("express");
var router = express.Router();

// Load index page
	router.get("/", function (req, res) {
		res.render("index")
	})

	// Render 404 page for any unmatched routes
	// router.get("*", function (req, res) {
	// 	res.render("404")
	// })

module.exports=router;