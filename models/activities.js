/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('activities', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    activity_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    met: {
      type: DataTypes.INTEGER,
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
    fk_activity_category: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'activity_categories',
        key: 'id'
      }
    }
  }, {
    tableName: 'activities'
  });
};
