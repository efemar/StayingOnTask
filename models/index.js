"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Task.belongsTo(db.Project);
db.Task.belongsTo(db.CategoryType);
db.Project.belongsTo(db.ProjectType);
db.Project.belongsTo(db.User);
db.TemplateTask.belongsTo(db.ProjectType);
db.TemplateTask.belongsTo(db.CategoryType);


db.Project.hasMany(db.Task);
db.CategoryType.hasMany(db.Task);
db.ProjectType.hasMany(db.Project);
db.User.hasMany(db.Project);
db.ProjectType.hasMany(db.TemplateTask);
db.CategoryType.hasMany(db.TemplateTask);

module.exports = db;
