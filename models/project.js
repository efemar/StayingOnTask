module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define("Project", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.TEXT
    },
    projectDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  });

  return Project;
};
