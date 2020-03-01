var db = require("../models");
var path = require("path");

module.exports = function(app) {

  // ********************************************
  // Load index/user maintenance page
  // ********************************************

  app.get("/", function(req, res) {
    db.User.findAll ().then(function (user){
      //console.log(cat);
      res.render("index", { userList: user });
    });
  });

/*  db.Example.findAll({}).then(function(dbExamples) {
    res.render("index", {
      msg: "random text from htmlRoutes.js",
      examples: dbExamples
    });
  });
*/
  // ********************************************
  // Load example page and pass in an example by id
  // ********************************************

  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {});
    });
  });

  // ********************************************
  // open the activity maintenance page 
  // ********************************************

  app.get("/activity-maint/:id", function (req,res){
    db.Activity_Category.findAll ().then(function (cat){
      //console.log(cat);
      if (req.params.id===0 || typeof req.params.id == "undefined"){
        res.render("activity-maint", { catList: cat, actList: [] });
      } else {
        db.Activity.findAll({
          where: { fk_activity_category: req.params.id }
        }).then(function(act) {
          //console.log(act);
          res.render("activity-maint", { catList: cat, actList: act });
        });
      }
    });
  });

  // ********************************************
  // Render 404 page for any unmatched routes
  // ********************************************

  app.get("*", function(req, res) {
    res.render("404");
  });
};
