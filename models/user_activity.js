// **********************************************
// **********************************************

module.exports = function(sequelize, DataTypes) {
  var User_Activity = sequelize.define("User_Activity", {
    activity_dt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    duration: {
      type:DataTypes.INTEGER,
      allowNull: false
    }
  });
  return User_Activity;
};
