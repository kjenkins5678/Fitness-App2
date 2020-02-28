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
  // ********************************************

  app.post("/api/newCat", function(req, res){
    //console.log("new cat ");
    db.Activity_Category.create(req.body).then(function(dbCat){
      res.json(dbCat);
    })
  });

  // ********************************************
  // ********************************************

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
};
