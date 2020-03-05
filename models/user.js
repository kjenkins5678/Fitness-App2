// **********************************************
// **********************************************

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // eslint-disable-next-line camelcase
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        min: 8,
        max: 100
      }
    },
    // eslint-disable-next-line camelcase
    height_inches: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        min: 48,
        max: 100
      }
    },
    // eslint-disable-next-line camelcase
    height_cm: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      validate: {
        isNumeric: true
      }
    },
    // eslint-disable-next-line camelcase
    weight_lb: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        min: 80,
        max: 600
      }
    },
    // eslint-disable-next-line camelcase
    weight_kg: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      validate: {
        isNumeric: true
      }
    },
    gender: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
        isIn: [["Male", "Female"]]
      }
    },
    // eslint-disable-next-line camelcase
    activity_level: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
        isIn: [["Sedentary", "Moderate", "Vigorous"]]
      }
    },
    goal: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
        isIn: [["Lose Weight", "Gain", "Recomp"]]
      }
    },
    // eslint-disable-next-line camelcase
    fat_per_day: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    // eslint-disable-next-line camelcase
    carbs_per_day: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    // eslint-disable-next-line camelcase
    protein_per_day: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  });
  return User;
};
