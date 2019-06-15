require("dotenv").config()
var express = require("express");
var exphbs = require("express-handlebars")
var passport = require("passport")
var PORT = process.env.PORT || 3000;
var db = require("./models");
var app = express();
var cookieSession = require("cookie-session");
var paypal = require('paypal-rest-sdk');

//cookie
app.use(cookieSession({
  keys: [process.env.SESSION_SECRET],
  cookie: {
      maxAge: 24*60*60*1000, //a day in milliseconds
      secure: false,
      httpOnly:true
  },
  resave: false,
  saveUninitialized: false
}));

app.use(express.static("."));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//routes
var htmlroutes = require("./routes/htmlRoutes");
var apiroutes = require("./routes/apiRoutes");
var paypalroute = require("./controllers/paypal")
app.use(htmlroutes);
app.use(apiroutes);
app.use(paypalroute);

//======== PayPal starts here ========//
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  client_id:process.env.PAYPAL_ID,
  client_secret:process.env.PAYPAL_SECRET
});


// ============ PayPal ends here ======================= //


//start the server and sync the database
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
