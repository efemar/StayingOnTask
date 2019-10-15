var db = require("../models");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/dashboard", isAuthenticated, function(req, res) {
    db.Project.findAll({}).then(function(data) {
      res.render("dashboard", { username: req.user.userName, projects: data });
    });
  });

  app.get("/signup", function(req, res) {
    // If the user already has logged in, send them to the dashboard page
    if (req.user) {
      res.redirect("/dashboard");
    }
    res.render("signup");
  });

  app.get("/login", function(req, res) {
    // If the user already has logged in, send them to the dashboard page
    if (req.user) {
      res.redirect("/dashboard");
    }
    res.render("login");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
