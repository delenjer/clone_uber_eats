import { IRestaurants } from '../../interface/interface';

export const SET_RESTAURANTS = 'SET_RESTAURANTS';

export const setRestaurants = (restaurants: IRestaurants) => ({
  type: SET_RESTAURANTS,
  restaurants,
});
