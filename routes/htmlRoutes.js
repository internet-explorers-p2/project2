var db = require("../models")
var express = require("express");
var router = express.Router();

router.get("/dashboard", checkAuthentication, goals, function(req, res) {	
	let data = {
		user: req.user.dataValues
	}
	console.log(req);
	
	res.render("dashboard", data)
});

function checkAuthentication(req, res, next) {
	if (req.isAuthenticated()) {
		return next();  
	} 
		res.redirect('/')
		console.log("====REDIRECTING YOU====")
}

function goals(req, res, next){
	let uid = req.user.id
	
	db.Goal.findAll({
		where: {
			UserId: uid,
		}
	}).then((data) =>{	
		
	})
	return next()
}

// Load index page
	router.get("/", function (req, res) {
		res.render("index")
	})
	
module.exports=router;