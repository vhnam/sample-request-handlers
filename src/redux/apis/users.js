import axios from 'axios';

export const fetchGetUsers = () => {
  return axios.get('https://reqres.in/api/users');
};
