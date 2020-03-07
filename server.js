require("dotenv").config();
console.log(process.env.OW_API_KEY);

var express = require("express");
var exphbs = require("express-handlebars");
let passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

var db = require("./models");
// let sequelize = require('./models/index.js');
let users = require('./models/users')(db.sequelize, Sequelize);

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  users.findByPk(id).then(function(user, err) {
    console.log(user);
    console.log(err);
    done(err, user);
  });
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy({
  // usernameField: 'user_name'
},
  function(username, password, done) {
    db.users.findOne({where: { user_name: `${username}`}}).then(function(user, err) {
      console.log(user);
      console.log(err);
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (user.dataValues.password !== password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

// app.post('/login',

//   // passport.authenticate('local', {
//   //   successRedirect: "/signpage",
//   //   failureRedirect: "/"
//   // })
// );

  app.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.redirect('/'); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.redirect(`/activity-maint/${req.user.id}`);
      });
    })(req, res, next);
  });

  // passport.authenticate('local', function(error, user, info) {
  //   console.log('test');
  //   console.log(user);
  //   if (user) {
  //     location.replace('/user-maint');
  //   }
  // })(req,res);



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

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
