var db = require("../models");

module.exports = function(app) {

  // ********************************************
  // Load index/user maintenance page
  // ********************************************

  app.get("/", function(req, res) {
    db.users.findAll ().then(function (user){
      //console.log(cat);
      res.render("index", { userList: user });
    });
  });

<<<<<<< HEAD
  // ********************************************
  // open the activity maintenance page 
  // ********************************************
=======
  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function() {
      res.render("example", {});
    });
  });
>>>>>>> f2d5c6df789455189e1ca0b697c4c8c8a19c1ba4

  app.get("/activity-maint/:id", function (req,res){
    db.activity_categories.findAll ().then(function (cat){
      if (req.params.id===0 || typeof req.params.id == "undefined"){
        res.render("activity-maint", { catList: cat, actList: [] });
      } else {
        db.activities.findAll({
          where: { fk_activity_category: req.params.id }
        }).then(function(act) {
          res.render("activity-maint", { catList: cat, actList: act });
        });
      }
    });
  });

  // ********************************************
  // Render the user activity log page
  // ********************************************

  app.get("/log-user-act/:id", function(req, res) {
    console.log("here i am"); 
    db.users.findAll ().then(function (dbUser){
      db.activity_categories.findAll ().then(function (dbCat){
        console.log("PARAM ID " + req.params.id);
        if (req.params.id == 0 || typeof req.params.id === "undefined") {
          res.render("user-activity-log", {
            userList: dbUser,
            catList: dbCat,
            actList: []
          });
        } else {
          db.activities.findAll({
            where: { fk_activity_category: req.params.id }
          }).then(function(dbAct) {
            res.render("user-activity-log", { 
              userList: dbUser,
              catList: dbCat,
              actList: dbAct
            });
          });
        }
      });
    });
  });

  app.get("/log/:id", function (req,res){

    db.users.findAll({
      where: {id: req.params.id},
      include: [{
        model: db.user_activity_log,
        required: true
        // where: {activity_dt: '2020-03-03T10:10:10.000Z'}
      },
      {
        model: db.user_foodlog,
        required: true
      }]
    }).then(function(user) {


      res.render("log", {
        name: user[0].user_name,
        goal_cal: user[0].calories_per_day,
        goal_pro: user[0].protein_per_day,
        goal_fat: user[0].fat_per_day,
        goal_carb: user[0].carbs_per_day,
        examples_activity: user[0].user_activity_logs,
        examples_food: user[0].user_foodlogs
      })
    });
  });


  // ********************************************
  // Render 404 page for any unmatched routes
  // ********************************************

  app.get("*", function(req, res) {
    res.render("404");
  });
};
