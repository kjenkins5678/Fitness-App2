/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var user_foodlog = sequelize.define('user_foodlog', {
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
        model: 'fdnutritionsummaries',
        key: 'FoodId'
      }
    }
  });

  user_foodlog.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    user_foodlog.belongsTo(models.users, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return user_foodlog;

};
