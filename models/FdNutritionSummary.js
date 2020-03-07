/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var food = sequelize.define('FdNutritionSummary', {
    FoodId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FdGrp_Desc: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    FdGrp_Cd: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FdName: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    Amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Msre_Desc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Gm_Wgt: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    msre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Calories: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Protein: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Fat: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Carbohydrates: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  });
  // food.associate = function(models) {
  //   // Associating users with user_activity_log
  //   food.hasMany(models.user_foodlogs, {
  //     onDelete: "cascade"
  //   });
  // };

  return food;
};
