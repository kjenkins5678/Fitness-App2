// **********************************************
// **********************************************

module.exports = function(sequelize, DataTypes) {
  var Activity_Category = sequelize.define("Activity_Category", {
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    }
  });
  return Activity_Category;
};

