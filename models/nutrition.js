// **********************************************
// **********************************************

module.exports = function(sequelize, DataTypes) {
  var fdnutritionsummary = sequelize.define("fdnutritionsummary", {
    FoodId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
      
    },

    FdGrp_desc: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50],
      },
    },
    FdGrp_Cd: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 10],
      },
    },

    FdName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 200],
      },
    },

    Amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    Msre_Desc: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 100],
      },
    },
    Gm_Wgt: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: {
        isNumeric: true,
      },
    },
    msre: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 100],
      },
    },
    Calories: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    Protein: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    Fat: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    Carbohydrates: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    }
  });
  return fdnutritionsummary;
};
