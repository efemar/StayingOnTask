var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

passport.use(
  new LocalStrategy(
    {
      usernameField: "userName"
    },
    function(username, password, done) {
      db.User.findOne({
        where: {
          userName: username
        }
      }).then(function(dbUser) {
        // If there's no such user
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect user name."
          });
        }
        // If there is such user, but the password the user gives us is incorrect
        else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        // If none of the above, return the user
        return done(null, dbUser);
      });
    }
  )
);

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
