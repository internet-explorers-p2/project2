var db = require("../models")
var express = require("express");
var router = express.Router();
var dailyChallenge = require('../helpers/daily-challenge');
const { Op } = require('sequelize')


router.get("/dashboard", checkAuthentication, getGoals, getAllCoin, completedChallenge,function(req, res) {	
	let data = {
		user: req.user.dataValues,
		goals: res.locals.goals,
		challengeOfTheDay: dailyChallenge,
		challengeId: res.locals.challengeId,
		totalCoin: req.coins
	}

	db.User.findByPk(req.user.id) 
	.then((userData) => {
		lastLoginDate = userData.lastLogin.toISOString().slice(0, 10)
		var today = new Date().toISOString().slice(0, 10)
		if (lastLoginDate !== today){
			db.Token.create({
				transaction: 'login',
				amount: 1,
				UserId: req.user.id
			})
			userData.update({
				lastLogin: new Date()
			})
		}

	})
	
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
function completedChallenge(req, res, next){
	let start = new Date();
    start.setHours(0,0,0,0);

    let end = new Date();
    end.setHours(23,59,59,999);
	db.Token.findAll({
		where: {
			UserId: req.user.id,
			createdAt: {
				[Op.between]: [start, end]
			}
		}
	}).then((data) => {
		if(data[0]){
			res.locals.challengeId = data[0].challengeId
		}
		return next()
	})

}

function getAllCoin(req, res, next){
	db.Token.findAll({
		attributes: [[db.sequelize.fn('sum', db.sequelize.col('amount')), 'total']],
		where: {
			UserId: req.user.id
		}
	}).then((data) => {
		if(data[0].dataValues.total){
			req.coins = data[0].dataValues.total
		}
		else {
			req.coins = 0
		}

		return next()
	})
}

//====== WORK IN PROGRESS ======
// function getPaid(req, res, next) {
// 	//if payment is approved and the user is authenticated
// 	if (res.state === "approved" && req.isAuthenticated ){
// 		db.User.update {
// 			isPremium: true
// 		}
// 		where uid = googleID
// 	}
// 	//update the users table where column = isPremium to true
// 	//then, on the handlebars file only show challenge of the day and coins if the user is premium
// }
//====== WORK IN PROGRESS ======

// Load index page
	router.get("/", function (req, res) {
		res.render("index")
	});
	// router.get("/pay", function (req, res) {
	// 	res.redirect("/")
	// });
	
module.exports=router;
