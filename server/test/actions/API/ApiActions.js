/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable no-global-assign */
/* eslint-disable no-unused-vars */


const supertest = require('supertest');
const should = require('should');
const baseActions = require('../common/BasicActions');
const baseURLMapper = require('../../../../UrlMapper').UrlMapper;


/** This createUser will help us to create a user with user-id and user name as a request body
        this request body can be changed as per your project api * */


exports.searchGit = async function (username) {
  URL = process.env.BASEURL;
  const endpoint = `${baseURLMapper.GITHUB}?username=${username}`;
  const res = await baseActions.sendGETRequest(URL, endpoint, username);

  return res;
};
