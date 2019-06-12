var db = require("../models")


module.exports = function (app) {
	// Load index page
	app.get("/", function (req, res) {
		res.render("index")
	})

	app.get("/dashboard", function(req, res){
		const goals=[{
			title: "New Car",
			id: 1
		},{
			title: "Get a dev job",
			id: 2
		}]
		const data= {
			username: "whatever",
			challengeOfTheDay: "This_a_mock_challenge",
			userGoals: goals 
		}
		res.render("dashboard", data)
	})


	// Load example page and pass in an example by id
	app.get("/example/:id", function (req, res) {
		db.goal.findAll({
			where: {
				userId: req.params.id
			}
		}).then(function (userGoals) {
			res.render("dashboard", {
				userGoals: userGoals
			})
		})
	})

	// Render 404 page for any unmatched routes
	app.get("*", function (req, res) {
		res.render("404")
	})
}
