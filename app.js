var SwaggerExpress = require('swagger-express-mw');
const bodyParser = require('body-parser');
var app = require('express')();
var mongoose = require('mongoose');
var dbConfig = require("./config/database.config")

module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);
  
  var port = process.env.PORT || 10010;
  // mongoose.Promise = bluebird;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Setting appropriate headers and CORS origins.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, UPDATE, DELETE, OPTIONS')
  res.header("Content-Type", "application/json");
  next();
});
  mongoose.connect(dbConfig.url);
  mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
  mongoose.connection.once('open', function(){
      console.log("Connection opened")
      console.log(app)
      require('./api/routes/user.routes')(app);
      app.listen(port);
  });

  if (swaggerExpress.runner.swagger.paths['/users']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/users');
  }
});
