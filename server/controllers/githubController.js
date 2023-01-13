/* eslint-disable no-empty-function */

// local modules
import tracelogger from '../logger/tracelogger';
import responses from '../utils/responses';
import getUser from '../services/getUser';
import getGist from '../services/getGist';
import getOrg from '../services/getOrg';


/**
 * @description Defines the actions for fetching details from github
 * @class githubController
 */
class githubController {
  /**
   *@description Get user details from github
   *@static
   *@param  {Object} req - request
   *@param  {object} res - response
   *@returns {object} - returns user details, gists and organization details
   *@memberof githubController
   */
  static async getDetails(req, res) {
    const { username } = req.query;
    try {
      // fetch user details
      const userDetails = await getUser(username);

      // fetch user gist
      const userGist = await getGist(username);

      // fetch user organization
      const userOrg = await getOrg(username);

      // Response Object
      const response = {
        user: userDetails,
        org: userOrg,
        gist: userGist
      };


      return res
        .status(200)
        .json(responses.success(200, 'Details successfully retrieved', response));
    } catch (error) {
      tracelogger(error);
      return res
        .status(500)
        .json(responses.error(500, 'Server error', error));
    }
  }
}

export default githubController;
