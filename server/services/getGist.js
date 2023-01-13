/* eslint-disable no-console */
/* eslint-disable max-len */

import axios from 'axios';
import config from '../config/index';


// fetch a user gist from github

const getGist = async (username) => {
  try {
    const gist = await axios.get(`https://api.github.com/users/${username}/gists`, { headers: { Authorization: `Bearer ${config.githubtoken}` } },);
    return gist.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};


export default getGist;
