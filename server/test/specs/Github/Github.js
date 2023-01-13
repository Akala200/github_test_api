/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-useless-concat */
/* eslint-disable max-len */ /* eslint-disable no-unused-vars */
// import { StatusCode as statusCode } from '../../../../StatusCode';

import mocha from 'mocha';
import supertest from 'supertest';
import should from 'should';
import { searchGit } from '../../actions/API/ApiActions';
// const statusCode = require('../../../../StatusCode');

const username = 'akala200';
describe('Performing Search Operations on Github', () => {
  describe('Get Request: Search For A User', () => {
    it('searching a github', async () => {
      const res = await searchGit(username);
      res.status.should.equal(200);
    });
  });
});
