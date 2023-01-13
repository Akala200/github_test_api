'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorHandler = exports.notFound = undefined;

var _responses = require('../utils/responses');

var _responses2 = _interopRequireDefault(_responses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notFound = exports.notFound = function notFound(req, res, next) {
  res.status(404).json(_responses2.default.error(404, 'Page not found'));
  next();
};

var errorHandler = exports.errorHandler = function errorHandler(error, req, res) {
  // res.status(res.statusCode || 500);
  res.status(404).json(_responses2.default.error(404, {
    message: error.message,
    error: process.env.NODE_ENV === 'production' ? {} : error.stack
  }));
};