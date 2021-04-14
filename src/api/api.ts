import axios from 'axios';

const API = axios.create({
  baseURL: 'https://mate-uber-eats-api.herokuapp.com/api/v1/',
  responseType: 'json',
});

export const getLocationRestaurants = () => API.get('https://mate-uber-eats-api.herokuapp.com/api/v1/locations')
  .then(response => response.data);

export const getRestaurants = (id:string) => {
  return API.get(`restaurants?location=${id}`)
    .then(response => response.data)
}

export const getRestaurant = (uuid: string) => API.get(`restaurants/${uuid}`)
  .then(response => response.data);

export const getMenuItems = (uuid: string) => API.get(`menu-items/${uuid}`)
  .then(response => response.data);
