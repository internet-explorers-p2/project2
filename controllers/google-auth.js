var passport = require("passport")
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy
var db = require("../models")

passport.serializeUser((user,done) => {
  done(null,user.id);
})

passport.deserializeUser((id,done) => {
  db.User.findByPk(id).then((user) => {
    done(null,user);
  })
  
})

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID:process.env.CLIENT_ID ,
    clientSecret:process.env.CLIENT_SECRET,
    callbackURL: "/google/redirect"
  },
  function(accessToken, refreshToken, profile, done) {
    db.User.findOne({
      where: {
        googleID: profile.id
      }
      }).then((currentUser) => {
      if(currentUser) {
      console.log("CURRENT USER IS: " + profile.displayName)
      console.log(currentUser.id)
      done(null, currentUser)
      }else{
        var data = {
          name: profile.displayName,
          googleID: profile.id
        };
        db.User.create(data).then(function(newUser, created) {
          if (!newUser) {
            return done(null, false);
          }
          if (newUser) {
            return done(null, newUser);
          }
        })
          console.log("++++new user created:++++++ " + profile.displayName)

      // }
    }})}))