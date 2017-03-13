var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var routes = require('./app/routes/routes');
var mongoose = require('mongoose');


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Use environment defined port or 3000
//var port = process.env.PORT || 3000;

var dbName = 'apiObs';
var connectionString = 'mongodb://localhost:27017/' + dbName;

mongoose.connect(connectionString);


app.use(logger('dev'));
// Register all our routes with /api
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  });
});


module.exports = app;
