require("dotenv").config()
var express = require("express");
var exphbs = require("express-handlebars")
var passport = require("passport")
var PORT = process.env.PORT || 3000;
var db = require("./models");
var app = express();
// var Handlebars = require("handlebars");

// app.use(express.static(__dirname + "public"));
app.use(express.static("."));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.get("/", (req,res) => {
//   res.render("index")
// })
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var htmlroutes = require("./routes/htmlRoutes");
var apiroutes = require("./routes/apiRoutes");

app.use(htmlroutes);
app.use(apiroutes);


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});


// // 
// Handlebars.registerHelper("equals", function(string1 ,string2, options) {
//   if (string1 === string2) {
//       return options.fn(this);
//   } else {
//       return options.inverse(this);
//   }
// })