'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
/* eslint-disable max-len */

var supertest = require('supertest');
require('dotenv').config();
var headers = require('../../testData/DefaultHeaders').myHeaders;

/** This sendGETRequest can be used when you dont need to pass a token while performing a GET operation * */

exports.sendGETRequest = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(baseUrl, apiEndPoint) {
    var res;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return supertest(baseUrl).get(apiEndPoint).retry(2).set(headers.ACCEPT_JSON).set(headers.APPLICATION_JSON);

          case 3:
            res = _context.sent;
            return _context.abrupt('return', res);

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            console.log('Error in sending Get Request: ', _context.t0);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 7]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();