var db = require("../models");

module.exports = function(app) {

  // ********************************************
  // activity categories 
  // ********************************************

  app.post("/api/newCat", function(req, res){
    //console.log("new cat ");
    db.activity_categories.create(req.body).then(function(dbCat){
      res.json(dbCat);
    });
  });

  app.delete("/api/delCat/:id", function(req, res) {
    //console.log("cat del");
    db.activity_categories.destroy({
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
    db.activities.create(req.body).then(function(dbCat){
      res.json(dbCat);
    });
  });

  app.post("/api/updActivity/:id", function(req, res) {

    console.log("updActivity\n" + req.body.activity_name);
    console.log("updActivity\n" + req.params.id);

    db.activities.update({
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
    db.activities.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCat) {
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
    }).then(function(dbUser) {
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
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/api/testing/:id", function(req, res) {
    db.users.findAll({
      where: {id: req.params.id},
      include: [{
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
  // authentication
  // ********************************************

  // app.post('/login', function(req, res) {
  //   console.log(req.body);
  //   console.log(req.body.username);
  //   db.users.findOne({where: {user_name: `${req.body.username}`}}, function(err, user) {
  //     console.log(user);
  //     if (err) throw err;
  //     if (!user) {
  //       location.replace('/');
  //     } else if (user.password !== req.body.username) {
  //       location.replace('/signpage');
  //     } else {
  //       location.replace('/activity-maint')
  //     }
  //   })
  // })
  
};
