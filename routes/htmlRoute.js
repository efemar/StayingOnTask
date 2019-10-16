var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/signup", function(req, res) {
    //If the user already has logged in, send them to the dashboard page
    if (req.user) {
      res.redirect("/dashboard");
    } else {
      res.render("signup");
    }
  });

  app.get("/login", function(req, res) {
    // If the user already has logged in, send them to the dashboard page
    if (req.user) {
      res.redirect("/dashboard");
    } else {
      res.render("login");
    }
  });

  app.get("/newprojects", isAuthenticated, function(req, res) {
    res.render("newprojects", { username: req.user.userName });
  });

  app.get("/aboutus", function(req, res) {
    res.render("about");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
