'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mocha = require('mocha');

var _mocha2 = _interopRequireDefault(_mocha);

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _should = require('should');

var _should2 = _interopRequireDefault(_should);

var _ApiActions = require('../../actions/API/ApiActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const statusCode = require('../../../../StatusCode');

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-useless-concat */
/* eslint-disable max-len */ /* eslint-disable no-unused-vars */
// import { StatusCode as statusCode } from '../../../../StatusCode';

var username = 'akala200';
describe('Performing Search Operations on Github', function () {
  describe('Get Request: Search For A User', function () {
    it('searching a github', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var res;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _ApiActions.searchGit)(username);

            case 2:
              res = _context.sent;

              res.status.should.equal(200);

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    })));
  });
});