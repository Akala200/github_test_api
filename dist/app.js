'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _errorhandler = require('errorhandler');

var _errorhandler2 = _interopRequireDefault(_errorhandler);

var _errorhandlers = require('./server/middlewares/errorhandlers');

var _tracelogger = require('./server/logger/tracelogger');

var _tracelogger2 = _interopRequireDefault(_tracelogger);

var _routes = require('./server/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// initialize express
var app = (0, _express2.default)();

// for request
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _cors2.default)());
app.use((0, _morgan2.default)('dev'));

app.get('/', function (req, res) {
  res.json({ massage: 'Welcome to Test API' });
});
app.use('/api', _routes2.default);

app.use('*', _errorhandlers.notFound);
app.use((0, _errorhandler2.default)());

process.on('unhandledRejection', function (reason) {
  (0, _tracelogger2.default)(reason);
});

process.on('uncaughtException', function (reason) {
  (0, _tracelogger2.default)(reason);
});

var PORT = process.env.PORT || 5678;
app.listen(PORT, function () {
  process.stdout.write('app is listening on port ' + PORT);
});

exports.default = app;