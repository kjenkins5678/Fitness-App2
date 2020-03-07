// **********************************************
// **********************************************

module.exports = function(sequelize, DataTypes) {
  var Activity = sequelize.define("Activity", {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    // eslint-disable-next-line camelcase
    activity_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    met: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    }
  });
  return Activity;
};
