/* eslint-disable no-console */
/* eslint-disable max-len */


const supertest = require('supertest');
require('dotenv').config();
const headers = require('../../testData/DefaultHeaders').myHeaders;


/** This sendGETRequest can be used when you dont need to pass a token while performing a GET operation * */

exports.sendGETRequest = async (baseUrl, apiEndPoint) => {
  try {
    const res = await supertest(baseUrl).get(apiEndPoint).retry(2)
      .set(headers.ACCEPT_JSON)
      .set(headers.APPLICATION_JSON);
    return res;
  } catch (err) {
    console.log('Error in sending Get Request: ', err);
  }
};
