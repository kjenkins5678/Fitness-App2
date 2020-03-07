/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var user_activity_log = sequelize.define('user_activity_log', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    activity_dt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    duration_entry: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    calories_per_hour: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    calories_per_activity: {
      type: DataTypes.INTEGER,
      allowNull: true
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
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    fk_activity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'activities',
        key: 'id'
      }
    }
  });

  user_activity_log.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    user_activity_log.belongsTo(models.users, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return user_activity_log;
};
