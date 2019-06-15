var db = require("../models")
var express = require("express");
var router = express.Router();
var dailyChallenge = require('../helpers/daily-challenge');


router.get("/dashboard", checkAuthentication, getGoals, function(req, res) {	
	let data = {
		user: req.user.dataValues,
		goals: res.locals.goals,
		username: "Im_a_fake_username",
		challengeOfTheDay: dailyChallenge.title,
		imageChallenge: dailyChallenge.image

	}	
	
	res.render("dashboard", data)
});

function checkAuthentication(req, res, next) {
	if (req.isAuthenticated()) {
		return next();  
	} 
		res.redirect('/')
		console.log("====REDIRECTING YOU====")
}

function getGoals(req, res, next){
	let uid = req.user.id
	
	db.Goal.findAll({
		where: {
			UserId: uid,
		}
	}).then((data) =>{
		res.locals.goals = data
		return next()		
	})
}

// Load index page
	router.get("/", function (req, res) {
		res.render("index")
	})
	
module.exports=router;