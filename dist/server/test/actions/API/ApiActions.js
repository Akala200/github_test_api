'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable no-global-assign */
/* eslint-disable no-unused-vars */

var supertest = require('supertest');
var should = require('should');
var baseActions = require('../common/BasicActions');
var baseURLMapper = require('../../../../UrlMapper').UrlMapper;

/** This createUser will help us to create a user with user-id and user name as a request body
        this request body can be changed as per your project api * */

exports.searchGit = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(username) {
    var endpoint, res;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            URL = process.env.BASEURL;
            endpoint = baseURLMapper.GITHUB + '?username=' + username;
            _context.next = 4;
            return baseActions.sendGETRequest(URL, endpoint, username);

          case 4:
            res = _context.sent;
            return _context.abrupt('return', res);

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();