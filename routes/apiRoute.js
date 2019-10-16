var db = require("../models");
var moment = require("moment");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  app.post("/api/signup", function(req, res) {
    db.User.create(req.body)
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/dashboard", isAuthenticated, function(req, res) {
    res.render("dashboard", { username: req.user.userName });
  });

  app.get("/projects", isAuthenticated, function(req, res) {
    db.Project.findAll({
      where: { UserId: req.user.id },
      order: [["projectDate", "ASC"]],
      include: db.Task
    }).then(function(result) {
      var projectArray = [];

      for (var i = 0; i < result.length; i++) {
        var projectObj = {};
        projectObj.id = result[i].dataValues.id;
        projectObj.name = result[i].dataValues.name;
        projectObj.projectDate = moment(
          result[i].dataValues.projectDate,
          "YYYY-MM-DD"
        ).format("MM/DD/YYYY");
        projectObj.totalTasks = result[i].dataValues.Tasks.length;
        projectObj.completedTasks = result[i].dataValues.Tasks.filter(function(
          item
        ) {
          return item.completed === true;
        }).length;
        projectArray.push(projectObj);
      }

      res.json(projectArray);
    });
  });

  app.post("/projects", function(req, res) {
    var newProject = {};
    newProject.name = req.body.name;
    newProject.description = req.body.description;
    newProject.projectDate = moment(req.body.projectDate, "MM/DD/YYYY");
    newProject.UserId = req.user.id;
    newProject.ProjectTypeId = req.body.ProjectTypeId;

    db.Project.create(newProject).then(function(result) {
      var projectTypeId = result.ProjectTypeId;
      var projectId = result.id;

      addTemplateTaskToProject(projectTypeId, projectId);

      res.redirect("/dashboard");
    });
  });

  app.delete("/projects/:id", function(req, res) {
    db.Task.destroy({
      where: { ProjectId: req.params.id }
    }).then(function() {
      // results is the number of task records deleted
      db.Project.destroy({
        where: { id: req.params.id }
      }).then(function(result) {
        // result is number 1
        res.json(result);
      });
    });
  });

  app.get("/projects/:id", isAuthenticated, function(req, res) {
    db.Task.findAll({
      where: { ProjectId: req.params.id },
      order: [["CategoryTypeId", "ASC"]],
      include: [db.CategoryType]
    }).then(function(results) {
      var tasks = [];

      for (var i = 0; i < results.length; i++) {
        var taskObj = {};
        taskObj.id = results[i].dataValues.id;
        taskObj.task = results[i].dataValues.description;
        taskObj.category = results[i].dataValues.CategoryType.dataValues.name;

        if (results[i].dataValues.completeByDate) {
          taskObj.date = results[i].dataValues.completeByDate;
        } else {
          taskObj.date = "";
        }

        taskObj.completed = results[i].dataValues.completed;

        tasks.push(taskObj);
      }

      res.render("task", { tasks: tasks, username: req.user.userName });
    });
  });

  app.post("/tasks", function(req, res) {
    db.Task.create(req.body).then(function(result) {
      res.json(result);
      /* result returned is
      {"completed":false,"id":1,"description":"task a","completeByDate":"2019-11-01",
      "ProjectId":"2","CategoryTypeId":"3","updatedAt":"2019-10-12T04:00:17.549Z",
      "createdAt":"2019-10-12T04:00:17.549Z"}
      */
    });
  });

  app.put("/tasks/:id", function(req, res) {
    var updateObj = {};

    if (req.body.description) {
      updateObj.description = req.body.description;
    }

    if (req.body.completed) {
      updateObj.completed = req.body.completed;
    }

    if (req.body.completeByDate) {
      updateObj.completeByDate = req.body.completeByDate;
    }

    if (req.body.CategoryTypeId) {
      updateObj.CategoryTypeId = req.body.CategoryTypeId;
    }

    db.Task.update(updateObj, {
      where: { id: req.params.id }
    }).then(function(result) {
      res.json(result);
      // result is an array with a number 1
    });
  });

  app.delete("/tasks/:id", function(req, res) {
    db.Task.destroy({ where: { id: req.params.id } }).then(function(result) {
      res.json(result);
      // result is number 1
    });
  });

  function addTemplateTaskToProject(ProjectTypeId, ProjectId) {
    db.TemplateTask.findAll({
      where: { ProjectTypeId: ProjectTypeId },
      order: [["CategoryTypeId", "ASC"]]
    }).then(function(results) {
      // results is an array of template task objects

      for (var i = 0; i < results.length; i++) {
        var taskObj = {};

        taskObj.description = results[i].description;
        taskObj.ProjectId = ProjectId;
        taskObj.CategoryTypeId = results[i].CategoryTypeId;

        db.Task.create(taskObj)
          .then(function() {
            /* result returned is the newly ceated task object
          {"completed":false,"id":1,"description":"task a","completeByDate":"2019-11-01",
          "ProjectId":"2","CategoryTypeId":"3","updatedAt":"2019-10-12T04:00:17.549Z",
          "createdAt":"2019-10-12T04:00:17.549Z"}
          */
          })
          .catch(function(error) {
            if (error) {
              return false;
            }
          });
      }
    });
    return true;
  }
};
