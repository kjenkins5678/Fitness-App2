var db = require("../models");

module.exports = function(app) {

  // ********************************************
  // ********************************************

  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // ********************************************
  // activity categories 
  // ********************************************

  app.post("/api/newCat", function(req, res){
    //console.log("new cat ");
    db.Activity_Category.create(req.body).then(function(dbCat){
      res.json(dbCat);
    });
  });

  app.delete("/api/delCat/:id", function(req, res) {
    //console.log("cat del");
    db.Activity_Category.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCat) {
      res.json(dbCat);
    });
  });

  // ********************************************
  // activities
  // ********************************************

  app.post("/api/newActivity", function(req, res){
    //console.log("new cat ");
    db.Activity.create(req.body).then(function(dbCat){
      res.json(dbCat);
    });
  });

  app.post("/api/updActivity/:id", function(req, res) {

    console.log("updActivity\n" + req.body.activity_name);
    console.log("updActivity\n" + req.params.id);

    db.Activity.update({
      activity_name: req.body.activity_name,
      met: req.body.met
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbAct) {
      res.json(dbAct);
    });

  });

  app.delete("/api/delActivity/:id", function(req, res) {
    //console.log("cat del");
    db.Activity.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCat) {
      res.json(dbCat);
    });
  });



};

