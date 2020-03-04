/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_foodlog', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FoodId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FoodConsume_dt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Amount: {
      type: DataTypes.FLOAT,
      allowNull: false
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
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fk_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    fk_food: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'fdnutritionsummary',
        key: 'FoodId'
      }
    }
  }, {
    tableName: 'user_foodlog'
  });
};
