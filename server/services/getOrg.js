/* eslint-disable no-console */
/* eslint-disable max-len */

import axios from 'axios';
import config from '../config/index';


// fetch a user organizations from github

const getOrg = async (username) => {
  try {
    const org = await axios.get(`https://api.github.com/users/${username}/orgs`, { headers: { Authorization: `Bearer ${config.githubtoken}` } },);
    return org.data;
  } catch (err) {
    return null;
  }
};


export default getOrg;
