var db = require("../models");
var path = require("path");

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

  // ********************************************
  // open the activity maintenance page 
  // ********************************************

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

  app.get("/log", function (req,res){
    res.render("log");
  });


  // ********************************************
  // Render 404 page for any unmatched routes
  // ********************************************

  app.get("*", function(req, res) {
    res.render("404");
  });
};
