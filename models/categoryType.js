module.exports = function(sequelize, DataTypes) {
  var CategoryType = sequelize.define("CategoryType", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return CategoryType;
};
