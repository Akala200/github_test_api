'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _tracelogger = require('../logger/tracelogger');

var _tracelogger2 = _interopRequireDefault(_tracelogger);

var _responses = require('../utils/responses');

var _responses2 = _interopRequireDefault(_responses);

var _getUser = require('../services/getUser');

var _getUser2 = _interopRequireDefault(_getUser);

var _getGist = require('../services/getGist');

var _getGist2 = _interopRequireDefault(_getGist);

var _getOrg = require('../services/getOrg');

var _getOrg2 = _interopRequireDefault(_getOrg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description Defines the actions for fetching details from github
 * @class githubController
 */
var githubController = function () {
  function githubController() {
    (0, _classCallCheck3.default)(this, githubController);
  }

  (0, _createClass3.default)(githubController, null, [{
    key: 'getDetails',

    /**
     *@description Get user details from github
     *@static
     *@param  {Object} req - request
     *@param  {object} res - response
     *@returns {object} - returns user details, gists and organization details
     *@memberof githubController
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var username, userDetails, userGist, userOrg, response;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                username = req.query.username;
                _context.prev = 1;
                _context.next = 4;
                return (0, _getUser2.default)(username);

              case 4:
                userDetails = _context.sent;
                _context.next = 7;
                return (0, _getGist2.default)(username);

              case 7:
                userGist = _context.sent;
                _context.next = 10;
                return (0, _getOrg2.default)(username);

              case 10:
                userOrg = _context.sent;


                // Response Object
                response = {
                  user: userDetails,
                  org: userOrg,
                  gist: userGist
                };
                return _context.abrupt('return', res.status(200).json(_responses2.default.success(200, 'Details successfully retrieved', response)));

              case 15:
                _context.prev = 15;
                _context.t0 = _context['catch'](1);

                (0, _tracelogger2.default)(_context.t0);
                return _context.abrupt('return', res.status(500).json(_responses2.default.error(500, 'Server error', _context.t0)));

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 15]]);
      }));

      function getDetails(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return getDetails;
    }()
  }]);
  return githubController;
}(); /* eslint-disable no-empty-function */

// local modules


exports.default = githubController;