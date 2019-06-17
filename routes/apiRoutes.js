var express = require("express");
var router = express.Router();
var db = require("../models");
const passport = require("passport");
require("../controllers/google-auth")
const { Op } = require('sequelize')

router.post("/dashboard/goal", (req, res) => {
  let goalData = req.body
  

	db.Goal.create(goalData).then((data)=>{
    console.log(goalData);
		console.log("data added to db");

  })
})

router.post("/dashboard/milestone", (req, res) =>{
  let milestoneData = req.body

  db.Milestone.create(milestoneData).then((data)=>{
    console.log(milestoneData);
    console.log("data added to db");

    
  })
})

router.post("/daily-challenge", (req, res) => {
  // let coin = req.body
  const { coin, challengeId } = req.body
  

  if (coin === 'add'){
    db.Token.create({
      transaction: 'challenge of the day',
      amount: 2,
      challengeId,
      UserId: req.user.id
    })
  }
  if (coin === 'remove'){
    let start = new Date();
    start.setHours(0,0,0,0);

    let end = new Date();
    end.setHours(23,59,59,999);

    db.Token.destroy({
      where: {
        challengeId,
        UserId: req.user.id,
        createdAt: {
            [Op.between]: [start, end]
          }
      }
    })
  }
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
