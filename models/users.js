/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    height_inches: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    height_cm: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    weight_lb: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight_kg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    activity_level: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    goal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    calories_per_day: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fat_per_day: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    carbs_per_day: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    protein_per_day: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  users.associate = function(models) {
    // Associating users with user_activity_log
    users.hasMany(models.user_activity_log, {
      onDelete: "cascade"
    });

    users.hasMany(models.user_foodlog, {
      onDelete: "cascade"
    });

  };

  return users;
};
