var db = require("../models");

module.exports = function (app) {

  // ********************************************
  // activity categories 
  // ********************************************

  app.post("/api/newCat", function (req, res) {
    //console.log("new cat ");
    db.activity_categories.create(req.body).then(function(dbCat){
      res.json(dbCat);
    });
  });

  app.delete("/api/delCat/:id", function (req, res) {
    //console.log("cat del");
    db.activity_categories.destroy({
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

  app.get("/api/getActivitiesByCategory/:id", function(req, res) {
    console.log("GET ACTIVITIES BY ID " + req.params.id)
    db.activities.findAll({
      where: { fk_activity_category: req.params.id }
    })
      .then(function(dbAct) {
        res.json(dbAct);
      });
  });

  app.post("/api/newActivity", function(req, res){
    //console.log("new cat ");
    db.activities.create(req.body).then(function(dbCat){
      res.json(dbCat);
    });
  });

  app.post("/api/updActivity/:id", function (req, res) {

    console.log("updActivity\n" + req.body.activity_name);
    console.log("updActivity\n" + req.params.id);

    db.activities.update({
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
    db.activities.destroy({
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
  app.get("/api/getUser/:id", function(req, res) {
    db.users.findAll({
      where: { id: req.params.id }
    }).then(function (dbUser) {
      //console.log(act);
      res.json(dbUser);
    });
  });

  // find by name
  app.get("/api/getUserName/:id", function(req, res) {
    db.users.findAll({
      where: { user_name: req.params.id }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // insert
  app.post("/api/newUser", function(req, res) {
    db.users.create(req.body).then(function(dbUser){
      res.json(dbUser);
    });
  });

  // update
  app.post("/api/updUser", function(req, res) {
    console.log("ENTERING /API/UPDUSER");
    db.users.update(req.body, {
      where: {
        id: req.body.id
      }
    })
      .then(function(dbUser) {
        res.json(dbUser);
      });
  });

  app.get("/api/testing/:id", function(req, res) {
    db.users.findAll({
      where: { id: req.params.id },
      include: [
        {
          model: db.user_activity_log,
          required: true
        },
        {
          model: db.user_foodlog,
          required:true
        }]
    }).then(function(user) {
      res.json(user);
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
  // ********************************************
  // user activity
  // ********************************************

  app.post("/api/newUserActivity", function(req, res){
    //console.log("new cat ");
    db.user_activity_log.create(req.body).then(function(dbUA){
      res.json(dbUA);
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
