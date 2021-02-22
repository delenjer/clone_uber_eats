import axios from 'axios';

const API = axios.create({
  baseURL: 'https://mate-uber-eats-api.herokuapp.com/api/v1/',
  responseType: 'json',
});

export const getRestaurants = () => API.get('restaurants?location=d2c8cd41-8970-416c-b05b-a4418db2b2d3')
  .then(response => response.data);

export const getRestaurant = (uuid: string) => API.get(`restaurants/${uuid}`)
  .then(response => response.data);
