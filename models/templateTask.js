module.exports = function(sequelize, DataTypes) {
  var TemplateTask = sequelize.define("TemplateTask", {
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return TemplateTask;
};
