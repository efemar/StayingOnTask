module.exports = function(sequelize, DataTypes) {
  var ProjectType = sequelize.define("ProjectType", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  return ProjectType;
};
