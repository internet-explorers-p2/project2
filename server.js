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
// var paypalroute = require("./controllers/paypal")
app.use(htmlroutes);
app.use(apiroutes);
// app.use(paypalroute);

//======== PayPal starts here ========//
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  client_id:process.env.PAYPAL_ID,
  client_secret:process.env.PAYPAL_SECRET
});

app.post('/pay', (req, res) => {
  var create_payment_json = {
      "intent": "sale",
      "payer": {
          "payment_method": "paypal"
      },
      "redirect_urls": {
          "return_url": "http://localhost:3000/dashboard",
          "cancel_url": "http://localhost:3000/cancel"
      },
      "transactions": [{
          "item_list": {
              "items": [{
                  "name": "set.com Beta subscription",
                  "sku": "001",
                  "price": "25.00",
                  "currency": "USD",
                  "quantity": 1
              }]
          },
          "amount": {
              "currency": "USD",
              "total": "25.00"
          },
          "description": "set.com Beta subscription"
      }]
  };

  paypal.payment.create(create_payment_json, function (error, payment) {
      if (error) {
          throw error;
      } else {
          for (var i = 0; i < payment.links.length; i++) {
              if (payment.links[i].rel === "approval_url") {
                  res.redirect(payment.links[i].href);
              }
          }
      }
  });

});

app.get('/dashboard', (req, res) => {
  var payerId = req.query.PayerID;
  var paymentId = req.query.paymentId;

  var execute_payment_json = {
      "payer_id": payerId,
      "transactions": [{
          "amount": {
              "currency": "USD",
              "total": "25.00"
          }
      }]
  };

  paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
      if (error) {
          console.log(error.response);
          throw error;
      } else {
          console.log("Get Payment Response");
          console.log(JSON.stringify(payment));
      }
  });
});

app.get('/cancel', (req, res) => res.send("Cancelled"));
// ============ PayPal ends here ======================= //


//start the server and sync the database
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
