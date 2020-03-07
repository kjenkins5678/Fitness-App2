// **********************************************
// **********************************************

module.exports = function(sequelize, DataTypes) {
  // eslint-disable-next-line camelcase
  var Activity_Category = sequelize.define("Activity_Category", {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    // eslint-disable-next-line camelcase
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    }
  });
  // eslint-disable-next-line camelcase
  return Activity_Category;
};
