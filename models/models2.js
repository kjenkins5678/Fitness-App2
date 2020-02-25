// **********************************************
// **********************************************

module.exports = function(sequelize, DataTypes) {

//    var Activity_Category = sequelize.define("Activity_Category", {
//       category_name: {
//          type: DataTypes.STRING,
//          allowNull: false,
//          validate: {
//             len: [1, 140]
//          }
//       }
//    });

// // **********************************************
// // **********************************************

//    var Activity = sequelize.define("Activity", {
//       activity_name: {
//          type: DataTypes.STRING,
//          allowNull: false,
//          validate: {
//             len: [1, 140]
//          }
//       },
//       met: {
//          type: DataTypes.INTEGER,
//          allowNull: false,
//          validate: {
//             isNumeric: true
//          }
//       }
//    });

   var User = sequelize.define("User", {
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
            min:8, 
            max:100
         }
      },
      height_inches: {
         type: DataTypes.INTEGER,
         allowNull:false, 
         validate:{
            isNumeric: true,
            min:48, 
            max:100
         } 
      }, 
      height_cm: {
         type: DataTypes.DECIMAL, 
         allowNull: true,
         validate:{
            isNumeric: true
         }
      }, 
      weight_lb:{
         type:DataTypes.INTEGER, 
         allowNull: false,
         validate:{
            isNumeric:true, 
            min:80, 
            max:600
         }
      }, 
      weight_kg: {
         type:DataTypes.DECIMAL, 
         allowNull: true,
         validate:{
            isNumeric:true
         }
      }, 
      gender: {
         type:DataTypes.STRING,
         validate:{
            isAlpha: true,
            isIn: [['Male', 'Female']]
         }
      },
      activity_level:{
         type:DataTypes.STRING,
         validate:{
            isAlpha:true,
            isIn:[['Sedentary','Moderate','Vigorous']]
         }
      },
      goal: {
         type:DataTypes.STRING,
         validate: {
            isAlpha: true,
            isIn:[['Lose Weight','Gain','Recomp']]
         }
      }, 
      fat_per_day: {
         type:DataTypes.DECIMAL,
         allowNull: true
      }, 
      carbs_per_day: {
         type:DataTypes.DECIMAL,
         allowNull: true
      }, 
      protein_per_day: {
         type:DataTypes.DECIMAL,
         allowNull: true
      }
   });

// **********************************************
// **********************************************

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

 //  Activity.belongsTo(Activity_Category, {foreignKey: 'fk_activity_category'});
return User; 
return User_Activity; 
//   return Activity_Category;
//   return Activity;

};



