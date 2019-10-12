module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    completeByDate: DataTypes.DATEONLY
  });

  return Task;
};
