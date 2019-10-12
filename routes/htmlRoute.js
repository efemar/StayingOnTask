var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // res.render("index")
    res.send("This is index page!");
  });

  app.get("/dashboard", function(req, res) {
    // res.render("dashboard")
    res.send("This is dashboard page!");
  });

  app.get("/projectsview", function(req, res) {
    db.Project.findAll({}).then(function(data) {
      // res.render("projectsview", data)
      res.send("This is projects view page!" + data);
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
