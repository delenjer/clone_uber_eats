import axios from 'axios';

const API = axios.create({
  baseURL: 'https://mate-uber-eats-api.herokuapp.com/api/v1/',
  responseType: 'json',
});

export const getRestaurants = () => API.get('restaurants')
  .then(response => response.data);
