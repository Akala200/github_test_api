/* eslint-disable max-len */

import axios from 'axios';
import config from '../config/index';


// fetch a user details from github

const getUser = async (username) => {
  try {
    const user = await axios.get(`https://api.github.com/users/${username}`, { headers: { Authorization: `Bearer ${config.githubtoken}` } },);
    return user.data;
  } catch (err) {
    return null;
  }
};


export default getUser;
