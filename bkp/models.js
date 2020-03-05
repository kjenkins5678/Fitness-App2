// **********************************************
// **********************************************

module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
  // eslint-disable-next-line camelcase
  var Activity_Category = sequelize.define("Activity_Category", {
    // eslint-disable-next-line camelcase
=======
  var activity_category = sequelize.define("activity_category", {
>>>>>>> f2d5c6df789455189e1ca0b697c4c8c8a19c1ba4
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    }
  });

  // **********************************************
  // **********************************************

  var Activity = sequelize.define("Activity", {
<<<<<<< HEAD
    // eslint-disable-next-line camelcase
=======
>>>>>>> f2d5c6df789455189e1ca0b697c4c8c8a19c1ba4
    activity_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
<<<<<<< HEAD
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
=======
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

//    var User = sequelize.define("User", {
//       user_name: {
//          type: DataTypes.STRING,
//          allowNull: false,
//          validate: {
//             len: [1, 140]
//          }
//       },
//       age: {
//          type: DataTypes.INTEGER,
//          allowNull: false, 
//          validate: {
//             isNumeric: true, 
//             min:8, 
//             max:100
//          }
//       },
//       height_inches: {
//          type: DataTypes.INTEGER,
//          allowNull:false, 
//          validate:{
//             isNumeric: true,
//             min:48, 
//             max:100
//          } 
//       }, 
//       height_cm: {
//          type: DataTypes.DECIMAL, 
//          allowNull: true,
//          validate:{
//             isNumeric: true
//          }
//       }, 
//       weight_lb:{
//          type:DataTypes.INTEGER, 
//          allowNull: false,
//          validate:{
//             isNumeric:true, 
//             min:80, 
//             max:600
//          }
//       }, 
//       weight_kg: {
//          type:DataTypes.DECIMAL, 
//          allowNull: true,
//          validate:{
//             isNumeric:true
//          }
//       }, 
//       gender: {
//          type:DataTypes.STRING,
//          validate:{
//             isAlpha: true,
//             isIn: [['Male', 'Female']]
//          }
//       },
//       activity_level:{
//          type:DataTypes.STRING,
//          validate:{
//             isAlpha:true,
//             isIn:[['Sedentary','Moderate','Vigorous']]
//          }
//       },
//       goal: {
//          type:DataTypes.STRING,
//          validate: {
//             isAlpha: true,
//             isIn:[['Lose Weight','Gain','Recomp']]
//          }
//       }, 
//       fat_per_day: {
//          type:DataTypes.DECIMAL,
//          allowNull: true
//       }, 
//       carbs_per_day: {
//          type:DataTypes.DECIMAL,
//          allowNull: true
//       }, 
//       protein_per_day: {
//          type:DataTypes.DECIMAL,
//          allowNull: true
//       }
//    });
>>>>>>> f2d5c6df789455189e1ca0b697c4c8c8a19c1ba4

  //    var User = sequelize.define("User", {
  //       user_name: {
  //          type: DataTypes.STRING,
  //          allowNull: false,
  //          validate: {
  //             len: [1, 140]
  //          }
  //       },
  //       age: {
  //          type: DataTypes.INTEGER,
  //          allowNull: false,
  //          validate: {
  //             isNumeric: true,
  //             min:8,
  //             max:100
  //          }
  //       },
  //       height_inches: {
  //          type: DataTypes.INTEGER,
  //          allowNull:false,
  //          validate:{
  //             isNumeric: true,
  //             min:48,
  //             max:100
  //          }
  //       },
  //       height_cm: {
  //          type: DataTypes.DECIMAL,
  //          allowNull: true,
  //          validate:{
  //             isNumeric: true
  //          }
  //       },
  //       weight_lb:{
  //          type:DataTypes.INTEGER,
  //          allowNull: false,
  //          validate:{
  //             isNumeric:true,
  //             min:80,
  //             max:600
  //          }
  //       },
  //       weight_kg: {
  //          type:DataTypes.DECIMAL,
  //          allowNull: true,
  //          validate:{
  //             isNumeric:true
  //          }
  //       },
  //       gender: {
  //          type:DataTypes.STRING,
  //          validate:{
  //             isAlpha: true,
  //             isIn: [['Male', 'Female']]
  //          }
  //       },
  //       activity_level:{
  //          type:DataTypes.STRING,
  //          validate:{
  //             isAlpha:true,
  //             isIn:[['Sedentary','Moderate','Vigorous']]
  //          }
  //       },
  //       goal: {
  //          type:DataTypes.STRING,
  //          validate: {
  //             isAlpha: true,
  //             isIn:[['Lose Weight','Gain','Recomp']]
  //          }
  //       },
  //       fat_per_day: {
  //          type:DataTypes.DECIMAL,
  //          allowNull: true
  //       },
  //       carbs_per_day: {
  //          type:DataTypes.DECIMAL,
  //          allowNull: true
  //       },
  //       protein_per_day: {
  //          type:DataTypes.DECIMAL,
  //          allowNull: true
  //       }
  //    });

  // // **********************************************
  // // **********************************************

  //    var User_Activity = sequelize.define("User_Activity", {
  //       activity_dt: {
  //          type: DataTypes.DATE,
  //          allowNull: false
  //       },
  //       duration: {
  //          type:DataTypes.INTEGER,
  //          allowNull: false
  //       }
  //    });

  Activity.belongsTo(Activity_Category, { foreignKey: "fk_activity_category" });

  // eslint-disable-next-line camelcase
  return Activity_Category;
};
