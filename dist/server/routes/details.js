'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _githubController = require('../controllers/githubController');

var _githubController2 = _interopRequireDefault(_githubController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

var getDetails = _githubController2.default.getDetails;


router.get('/user', getDetails);

exports.default = router;