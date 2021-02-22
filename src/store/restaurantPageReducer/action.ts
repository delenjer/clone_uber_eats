import { IRestaurants } from '../../interface/interface';

export const SET_RESTAURANT = 'SET_RESTAURANT';

export const setRestaurant = (restaurant: IRestaurants) => ({
  type: SET_RESTAURANT,
  restaurant,
});
