var db = require("../models");

module.exports = function (app) {

  // ********************************************
  // boilerplate example stuff 
  // ********************************************

  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // ********************************************
  // activity categories 
  // ********************************************

  app.post("/api/newCat", function (req, res) {
    //console.log("new cat ");
    db.Activity_Category.create(req.body).then(function (dbCat) {
      res.json(dbCat);
    });
  });

  app.delete("/api/delCat/:id", function (req, res) {
    //console.log("cat del");
    db.Activity_Category.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbCat) {
      res.json(dbCat);
    });
  });

  // ********************************************
  // activities
  // ********************************************

  app.post("/api/newActivity", function (req, res) {
    //console.log("new cat ");
    db.Activity.create(req.body).then(function (dbCat) {
      res.json(dbCat);
    });
  });

  app.post("/api/updActivity/:id", function (req, res) {

    console.log("updActivity\n" + req.body.activity_name);
    console.log("updActivity\n" + req.params.id);

    db.Activity.update({
      activity_name: req.body.activity_name,
      met: req.body.met
    }, {
      where: {
        id: req.params.id
      }
    }).then(function (dbAct) {
      res.json(dbAct);
    });

  });

  app.delete("/api/delActivity/:id", function (req, res) {
    //console.log("cat del");
    db.Activity.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbCat) {
      res.json(dbCat);
    });
  });

  // ********************************************
  // user
  // ********************************************

  // find by ID
  app.get("/api/getUser/:id", function (req, res) {
    db.User.findAll({
      where: { id: req.params.id }
    }).then(function (dbUser) {
      //console.log(act);
      res.json(dbUser);
    });
  });

  // find by name
  app.get("/api/getUserName/:id", function (req, res) {
    db.User.findAll({
      where: { user_name: req.params.id }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // insert
  app.post("/api/newUser", function (req, res) {
    db.User.create(req.body).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // update
  app.post("/api/updUser", function (req, res) {
    console.log("ENTERING /API/UPDUSER");
    db.User.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });


// ********************************************
// food
// ********************************************
// app.post("/api/newFood", function(req, res){
//   console.log("new food ");
//    db.Food.create(req.body).then(function(dbCat){
//    res.json(dbCat);
//    });
//  });
app.post("/api/newFood", function(req, res) {
    db.fdnutritionsummary.create(req.body).then(function(dbCat) {
      res.json(dbCat);
    });
});
};
// app.post("/api/newFood", function (req, res) {

//   db.Food.create(req.body).then(function (dbCat) {
//     res.json(dbCat);
//   });
// });
  // app.post("/api/updFoodName/:id", function(req, res) {

  //   console.log("updFoodName\n" + req.body.food_name);
  //   console.log("updFoodName\n" + req.params.id);

  //   db.Food.update({
  //     fdname: req.body.fdname,
  //     calories: req.body.calories
  //   }, {
  //     where: {
  //       foodid: req.params.id
  //     }
  //   }).then(function(dbFood) {
  //     res.json(dbFood);
  //   });

  // });

  // app.delete("/api/delFoodName/:id", function(req, res) {
  //   //console.log("cat del");
  //   db.Food.destroy({
  //     where: {
  //       foodid: req.params.id
  //     }
  //   }).then(function(dbFood) {
  //     res.json(dbFood);
  //   });
  // });