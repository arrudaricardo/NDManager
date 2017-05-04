const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fs = require('fs');
const index = require('./routes/index');
const users = require('./routes/users');

// FileSystem.readdirSync(AppZet.path + controllerPath).forEach(function (file) {
//   let controller = require(AppZet.path + controllerPath + file);
//   let controllerName = file.split('.')[0];
//   AppZet.controllers[controllerName] = controller;
// });

fs.readdirSync(__dirname + '/api/controllers').forEach((file)=> {
  global[file.replace('.js', '')] = require(__dirname + '/api/controllers/' + file);
})


var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.resolve('/Volumes/Seagate Backup Plus Drive')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // res.status(err.status || 500);
  res.redirect('/');
});

module.exports = app;
